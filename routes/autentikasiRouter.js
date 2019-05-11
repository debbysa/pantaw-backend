const express = require("express");
const router = express.Router();
const autentikasiController = require("../controller/AutentikasiController");

// autentikasi pemateri
router.post("/pemateri", autentikasiController.authenticatePemateri);

//autentikasi peserta
router.post("/peserta", autentikasiController.authenticatePeserta);

//logout peserta
router.delete("/peserta", autentikasiController.deauthenticatePeserta);

//autentikasi admin
router.post("/admin", autentikasiController.authenticateAdmin);

module.exports = router;
