const express = require('express')
const router = express.Router()
const con = require('../config/db')

const adminController = require('../controller/AdminController')

//route read
router.get('/', adminController.index)

//route create
router.post('/', adminController.store)

//route update
router.put('/:id', adminController.update)

//route delete
router.delete('/:id', adminController.destroy)

module.exports = router