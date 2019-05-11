const Percakapan = require("../model/Percakapan");
const Workshop = require("../model/Workshop");

module.exports = {
  //data percakapan workshop
  index: function(req, res) {
    Percakapan.findAll({ where: { id_workshop: req.params.id } }).then(function(
      rows
    ) {
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
