const Percakapan = require("../model/Percakapan");
const Pemateri = require("../model/Pemateri");
const jwt = require("jsonwebtoken");

module.exports = {
  //data percakapan workshop
  index: function(req, res) {
    Percakapan.findAll({
      where: { id_workshop: req.params.id },
      include: { model: Pemateri },
      order: [["id_percakapan", "ASC"]]
    }).then(function(rows) {
      rows.forEach(row => {
        if (row.pemateri == null)
          row.set("peserta", {
            nama: jwt.verify(row.id_pengirim, "randomStuff")
          });
      });
      res.json(rows);
    });
  },
  store: function(req, res) {
    req.body.id_workshop = req.params.id;
    Percakapan.create(req.body).then(function(row) {
      res.json(row);
    });
  }
};
