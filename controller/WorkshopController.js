const Workshop = require("../model/Workshop");

module.exports = {
  //semua data workshop
  index: function(req, res) {
    Workshop.findAll().then(function(rows) {
      res.json(rows);
    });
  },

  //data workshop berdasarkan ID
  show: function(req, res) {
    Workshop.findByPk(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  store: function(req, res) {
    Workshop.create(req.body).then(function(row) {
      res.json(row);
    });
  },

  update: function(req, res) {
    Workshop.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },

  destroy: function(req, res) {
    Workshop.findByPk(req.params.id).then(function(row) {
      row.destroy();
      res.json(row);
    });
  }
};
