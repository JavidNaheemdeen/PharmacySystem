const Pharmacy = require("../models/pharmacy.js");
const bcrypt = require("bcrypt");

// Function to add a new pharmacy
exports.addPharmacy = async (req, res) => {
  try {
    const { name, email, address, town, logo, contact, opentime, password } =
      req.body;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds, you can adjust it

    const newPharmacy = new Pharmacy({
      name,
      email,
      address,
      town,
      logo,
      contact,
      opentime,
      password: hashedPassword, // Store the hashed password
    });

    const savedPharmacy = await newPharmacy.save();
    res.json(savedPharmacy);
  } catch (error) {
    res.status(500).json({ error: "Could not add the pharmacy" });
  }
};

// Function to update a pharmacy by ID
exports.updatePharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.id; // Extract the pharmacy ID from the URL
    const updateData = req.body; // Data to update

    const updatedPharmacy = await Pharmacy.findByIdAndUpdate(
      pharmacyId,
      updateData,
      { new: true } // This option returns the updated document
    );

    if (!updatedPharmacy) {
      return res.status(404).json({ error: "Pharmacy not found" });
    }

    res.json(updatedPharmacy);
  } catch (error) {
    res.status(500).json({ error: "Could not update the pharmacy" });
  }
};

// Function to delete a pharmacy by ID
exports.deletePharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.id; // Extract the pharmacy ID from the URL

    const deletedPharmacy = await Pharmacy.findByIdAndRemove(pharmacyId);

    if (!deletedPharmacy) {
      return res.status(404).json({ error: "Pharmacy not found" });
    }

    res.json({ message: "Pharmacy deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete the pharmacy" });
  }
};

// Function to get all pharmacies
exports.getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve pharmacies" });
  }
};

// Function to get a pharmacy by ID
exports.getPharmacyById = async (req, res) => {
  try {
    const pharmacyId = req.params.id; // Extract the pharmacy ID from the URL

    const pharmacy = await Pharmacy.findById(pharmacyId);

    if (!pharmacy) {
      return res.status(404).json({ error: "Pharmacy not found" });
    }

    res.json(pharmacy);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the pharmacy" });
  }
};

// Function to get pharmacies by town
exports.getPharmaciesByTown = async (req, res) => {
  try {
    const town = req.params.town; // Extract the town from the URL

    const pharmacies = await Pharmacy.find({ town });

    if (pharmacies.length === 0) {
      return res
        .status(404)
        .json({ error: "No pharmacies found in the specified town" });
    }

    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve pharmacies by town" });
  }
};

// Function to search for pharmacies by name
exports.searchPharmaciesByName = async (req, res) => {
  try {
    const partialName = req.params.name; // Extract the partial name from the URL

    const pharmacies = await Pharmacy.find({
      name: { $regex: partialName, $options: "i" },
    });

    if (pharmacies.length === 0) {
      return res
        .status(404)
        .json({ error: "No pharmacies found matching the provided name" });
    }

    res.json(pharmacies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Could not perform the pharmacy name search" });
  }
};

// Function to authenticate a pharmacist
exports.authenticatePharmacist = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the pharmacist by email
    const pharmacist = await Pharmacy.findOne({ email });

    if (!pharmacist) {
      return res.status(401).json({ error: "Pharmacist not found" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, pharmacist.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Authentication successful
    res
      .status(200)
      .json({ message: "Logged in successfully", _id: pharmacist._id });
  } catch (error) {
    res.status(500).json({ error: "Could not authenticate pharmacist" });
  }
};
