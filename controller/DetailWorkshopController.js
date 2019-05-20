const DetailWorkshop = require("../model/Detail_workshop");
const Status = require("../model/Status");
const jwt = require("jsonwebtoken");

module.exports = {
  //data detail workshop
  index: function(req, res) {
    DetailWorkshop.findAll({
      where: { id_workshop: req.params.id },
      include: { model: Status }
    }).then(function(rows) {
      rows = rows.map(row => {
        row.id_peserta = jwt.verify(row.id_peserta, "randomStuff");
        return row;
      });

      res.json(rows);
    });
  },

  update: function(req, res) {
    DetailWorkshop.findByPk(req.params.id_detail).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },

  resetStatus: function(req, res) {
    DetailWorkshop.update(
      { id_status: 3 },
      { where: { id_workshop: req.params.id } }
    ).then(function(rows) {
      res.json(rows);
    });
  }
};
