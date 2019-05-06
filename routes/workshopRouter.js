const express = require("express")
const router = express.Router()
const con = require("../config/db")

const workshopController = require("../controller/WorkshopController")

//router read
router.get('/', workshopController.show)

//router read :id
router.get('/:id', workshopController.index)

//router read data percakapan


//router create workshop
router.post('/', workshopController.store)

//router create percakapan workshop


//router update
router.put('/:id', workshopController.update)

//router delete
router.delete('/:id', workshopController.destroy)

module.exports = router