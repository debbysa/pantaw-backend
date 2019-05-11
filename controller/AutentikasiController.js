const Pemateri = require("../model/Pemateri");
const DetailWorkshop = require("../model/Detail_workshop");
const Admin = require("../model/Admin");
const jwt = require("jsonwebtoken");

module.exports = {
  authenticatePemateri: function(req, res) {
    const { username, password } = req.body;

    Pemateri.findOne({ where: { username } })
      .then(function(row) {
        if (row.password == password)
          jwt.sign({ user: row }, "randomStuff", function(err, token) {
            res.json({ success: true, token });
          });
      })
      .catch(function(err) {
        res.json({ success: false });
      });
  },

  authenticatePeserta: function(req, res) {
    const { nama, id_workshop } = req.body;
    jwt.sign(nama, "randomStuff", function(err, token) {
      DetailWorkshop.create({ id_peserta: token, id_workshop }).then(function(
        row
      ) {
        res.json({ success: true, token });
      });
    });
  },

  deauthenticatePeserta: function(req, res) {
    const { id_workshop, id_peserta } = req.body;
    DetailWorkshop.destroy({
      where: {
        id_workshop,
        id_peserta
      }
    }).then(function(rows) {
      res.json({ success: true });
    });
  },

  authenticateAdmin: function(req, res) {
    const { username, password } = req.body;

    Admin.findOne({ where: { username } })
      .then(function(row) {
        if (row.password == password)
          jwt.sign({ user: row }, "randomStuff", function(err, token) {
            res.json({ success: true, token });
          });
      })
      .catch(function(err) {
        res.json({ success: false });
      });
  }
};
