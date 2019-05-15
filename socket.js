const Percakapan = require("./model/Percakapan");
const DetailWorkshop = require("./model/Detail_workshop");

module.exports = function(socket) {
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
    DetailWorkshop.findAll({ where: { id_workshop } }).then(function(rows) {
      socket.emit("peserta", rows);
    });
  });

  socket.on("timer", function(time) {
    socket.emit("timer", time);
  });
};
