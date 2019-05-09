const express = require("express");
const router = express.Router();
const con = require("../config/db");

const workshopController = require("../controller/WorkshopController");

//router read
router.get("/", workshopController.index);

// router detail workshop
router.get("/:id/detail", workshopController.show);

//router read data percakapan
router.get("/:id/percakapan", workshopController.showPercakapan);

//router create workshop
router.post("/", workshopController.store);

//router create percakapan workshop
router.post("/percakapan", workshopController.storePercakapan);

//router create detail workshop
router.post("/detail", workshopController.storeDetail);

//router update data workshop
router.put("/:id", workshopController.update);

//router update detail workshop
router.put("/detail/:id", workshopController.updateDetail);

//router delete
router.delete("/:id", workshopController.destroy);

//router delete detail
router.delete("/detail/:id", workshopController.destroyDetail);

module.exports = router;
