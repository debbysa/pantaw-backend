const express = require("express");
const router = express.Router();
const statusController = require("../controller/StatusController");
const verifyToken = require("../middleware/verifyToken");

router.use(verifyToken);

//router read
router.get("/", statusController.index);

//router create
router.post("/", statusController.store);

//router update
router.put("/:id", statusController.update);

//router delete
router.delete("/:id", statusController.destroy);

module.exports = router;
