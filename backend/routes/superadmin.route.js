const express = require("express");
const router = express.Router();
const superadminController = require("../controllers/superadmin.controller.js");

router.post("/addsuperadmin", superadminController.addSuperadmin);
router.put("/updsuperadmin/:id", superadminController.updateSuperadmin);
router.delete("/delsuperadmin/:id", superadminController.deleteSuperadmin);
router.get("/:id", superadminController.getSuperadminById);
router.post("/authenticate", superadminController.authenticateSuperadmin);

module.exports = router;
