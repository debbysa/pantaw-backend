const express = require("express")
const router = express.Router()
const con = require("../config/db")

const statusController = require("../controller/StatusController")

//router read
router.get('/', statusController.index)

//router create
router.post('/', statusController.store)

//router update
router.put('/:id', statusController.update)

//router delete
router.delete('/:id', statusController.destroy)

module.exports = router