const express = require("express");
const router = express.Router();
const workshopController = require("../controller/WorkshopController");
const detailWorkshopController = require("../controller/DetailWorkshopController");
const percakapanController = require("../controller/PercakapanController");
const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);

//router read
router.get("/", workshopController.index);
router.get("/:id", workshopController.show);

//router create workshop
router.post("/", workshopController.store);

//router update data workshop
router.put("/:id", workshopController.update);

//router delete
router.delete("/:id", workshopController.destroy);

//router read data percakapan
router.get("/:id/percakapan", percakapanController.index);

//router create percakapan workshop
router.post("/:id/percakapan", percakapanController.store);

// router detail workshop
router.get("/:id/detail", detailWorkshopController.index);

//router update detail workshop
router.put("/:id/detail/:id_detail", detailWorkshopController.update);

// router reset status detail workshop
router.patch("/:id/detail/resetStatus", detailWorkshopController.resetStatus);

module.exports = router;
