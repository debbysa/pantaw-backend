const Admin = require('../model/Admin')
const path = require('path')

module.exports = {

    index: function (req, res) {
        Admin.findAll().then(function (rows) {
            res.json('tampildata', {
                admin: rows
            })
        })
        console.log();
    },
    store: function (req, res) {
        Admin.create(req.body).then(function () {
            res.redirect('/admin')
        })
    },
    edit: function (req, res) {
        Admin.findByPrimary(req.params.id).then(function (row) {
            res.render('/admin/edit', { data: row })
        })
    },

    update: function (req, res) {
        Admin.findByPrimary(req.params.id).then(function (row) {
            row.update(req.body)
            res.redirect('/admin')
        })
    },
    destroy: function (req, res) {
        Admin.findByPrimary(req.params.id).then(function (row) {
            row.destroy()
            res.redirect("/admin")
        })
    },
    show: function (req, res) {
        Admin.findByPk(req.params.id).then(function (row) {
            res.send("belum ada view")
        })
    }
}