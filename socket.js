const Percakapan = require("./model/Percakapan");
const DetailWorkshop = require("./model/Detail_workshop");
const Status = require("./model/Status");
const jwt = require("jsonwebtoken");

module.exports = function(socket) {
  socket.on("percakapan", function(data) {
    Percakapan.create(data).then(function(row) {
      socket.broadcast.emit("percakapan", row);
    });
  });

  socket.on("detail", function(id_workshop) {
    DetailWorkshop.findAll({
      where: { id_workshop },
      include: { model: Status }
    }).then(function(rows) {
      rows = rows.map(row => {
        row.id_peserta = jwt.verify(row.id_peserta, "randomStuff");
        return row;
      });

      socket.broadcast.emit("detail", rows);
    });
  });

  socket.on("task", function(task) {
    socket.broadcast.emit("task", task);
  });
};
