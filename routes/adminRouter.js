const express = require("express");
const router = express.Router();
const adminController = require("../controller/AdminController");
const verifyToken = require("../middleware/verifyToken");

router.use(verifyToken);

//route read
router.get("/", adminController.index);

//route create
router.post("/", adminController.store);

//route update
router.put("/:id", adminController.update);

//route delete
router.delete("/:id", adminController.destroy);

module.exports = router;
