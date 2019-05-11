const express = require("express");
const router = express.Router();
const pemateriController = require("../controller/PemateriController");
const verifyToken = require("../middleware/verifyToken");

//route create untuk registrasi
router.post("/", pemateriController.store);

router.use(verifyToken);

//router read
router.get("/", pemateriController.index);
//route update
router.put("/:id", pemateriController.update);

//route delete
router.delete("/:id", pemateriController.destroy);

module.exports = router;
