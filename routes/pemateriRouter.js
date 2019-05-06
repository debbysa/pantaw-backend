const express = require("express")
const router = express.Router()
const con = require("../config/db")

const pemateriController = require("../controller/PemateriController")

//router read
router.get('/', pemateriController.index)

//route create
router.post('/', pemateriController.store)

//route update
router.put('/:id', pemateriController.update)

//route delete
router.delete('/:id', pemateriController.destroy)

module.exports = router