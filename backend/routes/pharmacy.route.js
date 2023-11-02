const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacy.controller.js");

router.post("/addpharmacy", pharmacyController.addPharmacy);
router.put("/updatepharmacy/:id", pharmacyController.updatePharmacy);
router.delete("/deletepharmacy/:id", pharmacyController.deletePharmacy);
router.get("/", pharmacyController.getAllPharmacies);
router.get("/:id", pharmacyController.getPharmacyById);
router.get("/town/:town", pharmacyController.getPharmaciesByTown);
router.post("/authenticate", pharmacyController.authenticatePharmacist);
router.get("/search/:name", pharmacyController.searchPharmaciesByName);

module.exports = router;
