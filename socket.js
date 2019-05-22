const Percakapan = require("./model/Percakapan");
const Pemateri = require("./model/Pemateri");
const DetailWorkshop = require("./model/Detail_workshop");
const Status = require("./model/Status");
const jwt = require("jsonwebtoken");

module.exports = function(io, socket) {
  socket.on("percakapan", function(id_workshop) {
    Percakapan.findAll({
      where: { id_workshop },
      include: { model: Pemateri },
      order: [["id_percakapan", "ASC"]]
    }).then(function(rows) {
      rows.forEach(row => {
        if (row.pemateri == null)
          row.set("peserta", {
            nama: jwt.verify(row.id_pengirim, "randomStuff")
          });
      });
      io.sockets.emit("percakapan", rows);
    });
  });

  socket.on("detail", function(id_workshop) {
    DetailWorkshop.findAll({
      where: { id_workshop },
      include: { model: Status }
    }).then(function(rows) {
      rows.forEach(row => {
        row.set("peserta", { nama: jwt.verify(row.id_peserta, "randomStuff") });
      });

      socket.broadcast.emit("detail", rows);
    });
  });

  socket.on("task", function(task) {
    socket.broadcast.emit("task", task);
  });

  socket.on("resetStatus", function() {
    socket.broadcast.emit("resetStatus");
  });
};
