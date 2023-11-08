const Prescription = require("../models/prescription.js");
const bcrypt = require("bcrypt");

// Function to add a new prescription
exports.addPrescription = async (req, res) => {
  try {
    const {
      patientname,
      email,
      age,
      yourphone,
      whatsappnumber,
      address,
      choosepharmacy,
      gender,
      allergry,
      logo, // Assuming logo is part of the prescription
    } = req.body;

    const newPrescription = new Prescription({
      patientname,
      email,
      age,
      yourphone,
      whatsappnumber,
      address,
      choosepharmacy,
      gender,
      allergry,
      logo, // Store the prescription logo
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

    const deletedPrescription = await Prescription.findByIdAndRemove(prescriptionId);

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
    res.status(500).json({ error: 'Could not retrieve prescriptions' });
  }
};

// Function to get a prescription by ID
exports.getPrescriptionById = async (req, res) => {
  const prescriptionId = req.params.id;

  try {
    const prescription = await Prescription.findById(prescriptionId);

    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found' });
    }

    res.json(prescription);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve the prescription' });
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
      return res.status(404).json({ error: 'Prescription not found' });
    }

    res.json(updatedPrescription);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the prescription' });
  }
};