const Prescription = require("../models/prescription.js");
const bcrypt = require("bcrypt");

// Function to add a new prescription
exports.addPrescription = async (req, res) => {
  try {
    const {
      patientname,
      age,
      yourphone,
      address,
      choosepharmacy,
      gender,
      allergy,
      pic, // Assuming logo is part of the prescription
    } = req.body;

    const newPrescription = new Prescription({
      patientname,
      age,
      yourphone,
      address,
      choosepharmacy,
      gender,
      allergy,
      pic, // Store the prescription logo
    });

    const savedPrescription = await newPrescription.save();
    res.json(savedPrescription);
  } catch (error) {
    res.status(500).json({ error: "Could not add the prescription" });
  }
};

// Function to delete a prescription by ID
exports.deletePrescription = async (req, res) => {
  try {
    const prescriptionId = req.params.id; // Extract the prescription ID from the URL

    const deletedPrescription = await Prescription.findByIdAndRemove(
      prescriptionId
    );

    if (!deletedPrescription) {
      return res.status(404).json({ error: "Prescription not found" });
    }

    res.json({ message: "Prescription deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete the prescription" });
  }
};

// Function to get all prescriptions
exports.getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.json(prescriptions);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve prescriptions" });
  }
};

// Function to get a prescription by ID
exports.getPrescriptionById = async (req, res) => {
  const prescriptionId = req.params.id;

  try {
    const prescription = await Prescription.findById(prescriptionId);

    if (!prescription) {
      return res.status(404).json({ error: "Prescription not found" });
    }

    res.json(prescription);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the prescription" });
  }
};

// Function to update a prescription by ID
exports.updatePrescriptionById = async (req, res) => {
  const prescriptionId = req.params.id;
  const updateData = req.body; // Data to update

  try {
    const updatedPrescription = await Prescription.findByIdAndUpdate(
      prescriptionId,
      updateData,
      { new: true } // This option returns the updated document
    );

    if (!updatedPrescription) {
      return res.status(404).json({ error: "Prescription not found" });
    }

    res.json(updatedPrescription);
  } catch (error) {
    res.status(500).json({ error: "Could not update the prescription" });
  }
};

// Function to get prescriptions by pharmacy
exports.getPrescriptionsByPharmacy = async (req, res) => {
  const pharmacyId = req.params.pharmacyId;

  try {
    const prescriptions = await Prescription.find({
      choosepharmacy: pharmacyId,
    });

    if (!prescriptions || prescriptions.length === 0) {
      return res
        .status(404)
        .json({ error: "No prescriptions found for the specified pharmacy" });
    }

    res.json(prescriptions);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Could not retrieve prescriptions for the specified pharmacy",
      });
  }
};

// Function to get the number of prescriptions
exports.getPrescriptionCount = async (req, res) => {
  const pharmacyId = req.params.pharmacyId;

  try {
    const prescriptionCount = await Prescription.countDocuments({
      choosepharmacy: pharmacyId,
    });

    res.json({ count: prescriptionCount });
  } catch (error) {
    res.status(500).json({
      error: "Could not retrieve the number of prescriptions for the specified pharmacy",
    });
  }
};
