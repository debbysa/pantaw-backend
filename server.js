const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

app.use(express.json());
app.use(cors());

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

// listen socket
io.on("connection", function(socket) {
  require("./socket")(io, socket);
});

// start server
server.listen(3000, function() {
  console.log("server running");
});
