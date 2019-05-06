const Admin = require('../model/Admin')

module.exports = {

    index: function (req, res) {
        Admin.findAll().then(function (rows) {
            res.json(rows)
        })
    },

    store: function (req, res) {
        Admin.create(req.body).then(function (rows) {
            res.json(rows)
        })
    },

    update: function (req, res) {
        Admin.findByPk(req.params.id).then(function (row) {
            row.update(req.body)
            res.json(row)
        })
    },
    destroy: function (req, res) {
        Admin.findByPk(req.params.id).then(function (row) {
            row.destroy()
            res.json(row)
        })
    }
}