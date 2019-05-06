const express = require('express')
const router = express.Router()
const con = require('../config/db')

const adminController = require('../controller/AdminController')

router.get('/', adminController.index)

router.post('/', function (req, res) {
    res.send('menambahkan data admin')
})

router.put('/{id}', function (req, res) {
    res.send('mengubah data admin')
})

// route create
router.post('/admin', adminController.store)


module.exports = router