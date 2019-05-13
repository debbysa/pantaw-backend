const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());

// include router /admin
app.use("/admin", require("./routes/adminRouter"));

// include router /pemateri
app.use("/pemateri", require("./routes/pemateriRouter"));

// include router /workshop
app.use("/workshop", require("./routes/workshopRouter"));

//include router /status
app.use("/status", require("./routes/statusRouter"));

// include router /autentikasi
app.use("/autentikasi", require("./routes/autentikasiRouter"));

server.listen(3000, function() {
  console.log("server running");
});

// ========= socket script is here =====================

const Percakapan = require("./model/Percakapan");
const DetailWorkshop = require("./model/Detail_workshop");

io.on("connection", function(socket) {
  socket.on("percakapan", function(data) {
    Percakapan.create(data).then(function(row) {
      socket.emit("percakapan", row);
    });
  });

  socket.on("status", function(data) {
    const { id_detail_workshop } = data;
    DetailWorkshop.findByPk(id_detail_workshop).then(function(row) {
      row.update(data);
      socket.emit("status", row);
    });
  });

  socket.on("peserta", function(id_workshop) {
    DetailWorkshop.findAll({ where: { id_workshop } }).then(function(row) {
      socket.emit("peserta", row);
    });
  });

  socket.on("timer", function(time) {
    socket.emit("timer", time);
  });
});
