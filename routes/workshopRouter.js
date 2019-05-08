const express = require("express")
const router = express.Router()
const con = require("../config/db")

const workshopController = require("../controller/WorkshopController")

//router read
router.get('/', workshopController.index)

// router read by id
router.get('/:id', workshopController.show)

//router read data percakapan
router.get('/:id/percakapan', workshopController.showPercakapan)


//router create workshop
router.post('/', workshopController.store)

//router create percakapan workshop
router.post('/percakapan', workshopController.storePercakapan)

//router update
router.put('/:id', workshopController.update)

//router delete
router.delete('/:id', workshopController.destroy)

module.exports = router