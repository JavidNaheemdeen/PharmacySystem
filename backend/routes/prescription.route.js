const express = require("express");
const router = express.Router();
const prescriptionController = require("../controllers/prescription.controller.js");


router.post("/addprescription", prescriptionController.addPrescription);
router.delete("/deleteprescription/:id", prescriptionController.deletePrescription);
router.put("/updprescription/:id",prescriptionController.updatePrescriptionById);
router.get("/", prescriptionController.getAllPrescriptions);
router.get("/:id", prescriptionController.getPrescriptionById);
router.get('/pharmacy/:pharmacyId', prescriptionController.getPrescriptionsByPharmacy);



module.exports = router;