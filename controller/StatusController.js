const Status = require('../model/Status')
const path = require('path')

module.exports = {
    index: function (req, res) {
        Status.findAll().then(function (rows) {
            res.render('tampildata', {
                Status: rows
            })
        })
    },

    store: function (req, res) {
        Status.create(req.body).then(function () {
            res.redirect("/status")
        })
    },

    edit: function (req, res) {
        Status.findByPrimary(req.params.id).then(function (row) {
            res.render("status/edit", { data: row })
        })
    },

    update: function (req, res) {
        Status.findByPrimary(req.params.id).then(function (row) {
            row.update(req.body)
            res.redirect("/status")
        })
    },

    destroy: function (req, res) {
        Status.findByPrimary(req.params.id).then(function (row) {
            row.destroy()
            res.redirect("/status")
        })
    }
}