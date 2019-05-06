const Workshop = require('../model/Workshop')

module.exports = {

    show: function (req, res) {
        Workshop.findAll().then(function (rows) {
            res.json(rows)
        })
    },

    index: function (req, res) {
        Workshop.findByPk(req.params.id).then(function (row) {
            res.json(row)
        })
    },

    store: function (req, res) {
        Workshop.create(req.body).then(function (rows) {
            res.json(rows)
        })
    },

    update: function (req, res) {
        Workshop.findByPk(req.params.id).then(function (row) {
            row.update(req.body)
            res.json(row)
        })
    },
    destroy: function (req, res) {
        Workshop.findByPk(req.params.id).then(function (row) {
            row.destroy()
            res.json(row)
        })
    }
}