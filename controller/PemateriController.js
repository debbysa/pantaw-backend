const Pemateri = require('../model/Pemateri')
const path = require('path')

module.exports = {
    index: function (req, res) {
        Pemateri.findAll().then(function (rows) {
            res.render('tampildata', {
                Pemateri: rows
            })
        })
    },
    store: function (req, res) {
        Pemateri.create(req.body).then(function () {
            res.redirect("/pemateri")
        })
    },
    edit: function (req, res) {
        Pemateri.findByPrimary(req.params.id).then(function (row) {
            res.render("pemateri/edit", { data: row })
        })
    },

    update: function (req, res) {
        Pemateri.findByPrimary(req.params.id).then(function (row) {
            row.update(req.body)
            res.redirect("/pemateri")
        })
    },
    destroy: function (req, res) {
        Pemateri.findByPrimary(req.params.id).then(function (row) {
            row.destroy()
            res.redirect("/pemateri")
        })
    }
}