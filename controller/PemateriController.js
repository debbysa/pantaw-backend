const Pemateri = require('../model/Pemateri')

module.exports = {

    index: function (req, res) {
        Pemateri.findAll().then(function (rows) {
            res.json(rows)
        })
    },

    store: function (req, res) {
        Pemateri.create(req.body).then(function (rows) {
            res.json(rows)
        })
    },
    update: function (req, res) {
        Pemateri.findByPk(req.params.id).then(function (row) {
            row.update(req.body)
            res.json(row)
        })
    },

    destroy: function (req, res) {
        Pemateri.findByPk(req.params.id).then(function (row) {
            row.destroy()
            res.json(row)
        })
    }
}