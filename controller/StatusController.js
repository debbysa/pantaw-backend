const Status = require('../model/Status')

module.exports = {

    index: function (req, res) {
        Status.findAll().then(function (rows) {
            res.json(rows)
        })
    },

    store: function (req, res) {
        Status.create(req.body).then(function (rows) {
            res.json(rows)
        })
    },

    update: function (req, res) {
        Status.findByPk(req.params.id).then(function (row) {
            row.update(req.body)
            res.json(row)
        })
    },

    destroy: function (req, res) {
        Status.findByPk(req.params.id).then(function (row) {
            row.destroy()
            res.json(row)
        })
    }
}