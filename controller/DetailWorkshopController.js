const DetailWorkshop = require("../model/Detail_workshop");
const Workshop = require("../model/Workshop");
const Status = require("../model/Status");

module.exports = {
  //data detail workshop
  index: function(req, res) {
    DetailWorkshop.findAll({ where: { id_workshop: req.params.id } }).then(
      function(rows) {
        res.json(rows);
      }
    );
  },

  update: function(req, res) {
    DetailWorkshop.findByPk(req.params.id_detail).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  }
};
