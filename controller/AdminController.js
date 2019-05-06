const Admin = require('../model/Admin')
const path = require('path')

module.exports = {

    index: function (req, res) {
        Admin.findAll().then(function (rows) {
            res.json({
                admin: rows
            })
        })
    },
    store: function (req, res) {
        Admin.create(req.body).then(function (rows) {
            res.json({
                admin: rows
            })
        })
    },

    update: function (req, res) {
        Admin.findByPk(req.params.id).then(function (row) {
            row.update(req.body)
            res.redirect('/')
        })
    },
    destroy: function (req, res) {
        Admin.findByPk(req.params.id).then(function (row) {
            row.destroy()
            res.redirect('/')
        })
    },
    show: function (req, res) {
        Admin.findByPk(req.params.id).then(function (row) {
            res.send("belum ada view")
        })
    }
}