const Workshop = require("../model/Workshop");
const Percakapan = require("../model/Percakapan");
const DetailWorkshop = require("../model/Detail_workshop");
const Status = require("../model/Status");

module.exports = {
  index: function(req, res) {
    Workshop.findAll().then(function(rows) {
      res.json(rows);
    });
  },

  show: function(req, res) {
    Workshop.findByPk(req.params.id, {
      include: [{ model: DetailWorkshop, include: [{ model: Status }] }]
    }).then(function(rows) {
      res.json(rows);
    });
  },

  showPercakapan: function(req, res) {
    Workshop.findByPk(req.params.id, { include: [{ model: Percakapan }] }).then(
      function(rows) {
        res.json(rows);
      }
    );
  },

  store: function(req, res) {
    Workshop.create(req.body).then(function(row) {
      res.json(row);
    });
  },

  storePercakapan: function(req, res) {
    Percakapan.create(req.body).then(function(row) {
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
