const Workshop = require('../model/Workshop')
const path = require('path')

module.exports = {
    index: function (req, res) {
        Workshop.findAll().then(function (rows) {
            res.render('tampildata', {
                Workshop: rows
            })
        })
    },
    store: function (req, res) {
        Workshop.create(req.body).then(function () {
            res.redirect("/workshop")
        })
    },
    edit: function (req, res) {
        Workshop.findByPrimary(req.params.id).then(function (row) {
            res.render("workshop/edit", { data: row })
        })
    },
    update: function (req, res) {
        Workshop.findByPrimary(req.params.id).then(function (row) {
            row.update(req.body)
            res.redirect("/workshop")
        })
    },
    destroy: function (req, res) {
        Workshop.findByPrimary(req.params.id).then(function (row) {
            row.destroy()
            res.redirect("/workshop")
        })
    }
}