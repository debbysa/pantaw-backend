const express = require("express");
const router = express.Router();
const workshopController = require("../controller/WorkshopController");
const verifyToken = require("../middleware/verifyToken");

router.use(verifyToken);

//router read
router.get("/", workshopController.index);

//router create workshop
router.post("/", workshopController.store);

//router update data workshop
router.put("/:id", workshopController.update);

//router delete
router.delete("/:id", workshopController.destroy);

//router read data percakapan
router.get("/:id/percakapan", workshopController.showPercakapan);

//router create percakapan workshop
router.post("/:id/percakapan", workshopController.storePercakapan);

// router detail workshop
router.get("/:id/detail", workshopController.show);

//router update detail workshop
router.put("/:id/detail/:id_detail", workshopController.updateDetail);

module.exports = router;
