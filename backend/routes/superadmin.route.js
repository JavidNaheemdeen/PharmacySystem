const express = require("express");
const router = express.Router();
const superadminController = require("../controllers/superadmin.controller.js");

router.post("/addsuperadmin", superadminController.addSuperadmin);
router.put("/superadmin/:id", superadminController.updateSuperadmin);
router.delete("/superadmin/:id", superadminController.deleteSuperadmin);
router.post("/authenticate", superadminController.authenticateSuperadmin);

module.exports = router;
