const Workshop = require("../model/Workshop");
const Percakapan = require("../model/Percakapan");
const DetailWorkshop = require("../model/Detail_workshop");
const Status = require("../model/Status");

module.exports = {
  //semua data workshop
  index: function(req, res) {
    Workshop.findAll().then(function(rows) {
      res.json(rows);
    });
  },

  //data detail workshop
  show: function(req, res) {
    Workshop.findByPk(req.params.id, {
      include: [{ model: DetailWorkshop, include: [{ model: Status }] }]
    }).then(function(rows) {
      res.json(rows);
    });
  },

  //data percakapan workshop
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
    req.body.id_workshop = req.params.id;
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

  updateDetail: function(req, res) {
    DetailWorkshop.findByPk(req.params.id_detail).then(function(row) {
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
