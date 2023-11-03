const Superadmin = require("../models/superadmin.js");
const bcrypt = require("bcrypt");

// Function to authenticate a Superadmin
exports.authenticateSuperadmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the Superadmin by email
    const superadmin = await Superadmin.findOne({ email });

    if (!superadmin) {
      return res.status(401).json({ error: "Superadmin not found" });
    }

    if (superadmin.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Authentication successful
    res.status(200).json({ message: "Logged in successfully", _id: superadmin._id });
  } catch (error) {
    res.status(500).json({ error: "Could not authenticate Superadmin" });
  }
};


// Function to add a Superadmin
exports.addSuperadmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if a Superadmin with the same email already exists
    const existingSuperadmin = await Superadmin.findOne({ email });

    if (existingSuperadmin) {
      return res.status(400).json({ error: 'Superadmin with this email already exists' });
    }

    // Create a new Superadmin instance
    const superadmin = new Superadmin({
      name,
      email,
      password, // Make sure not to hash the password
    });

    // Save the Superadmin to the database
    await superadmin.save();

    // Return a success message
    res.status(201).json({ message: 'Superadmin added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not add Superadmin' });
  }
};

// Function to update a Superadmin by ID
exports.updateSuperadmin = async (req, res) => {
  try {
    const superadminId = req.params.id; // Extract Superadmin ID from request parameters
    const updates = req.body; // Data to update

    // Find the Superadmin by ID and update the data
    const updatedSuperadmin = await Superadmin.findByIdAndUpdate(
      superadminId,
      updates,
      { new: true }
    );

    if (!updatedSuperadmin) {
      return res.status(404).json({ error: "Superadmin not found" });
    }

    // Return the updated Superadmin
    res.status(200).json(updatedSuperadmin);
  } catch (error) {
    res.status(500).json({ error: "Could not update Superadmin" });
  }
};

// Function to delete a Superadmin by ID
exports.deleteSuperadmin = async (req, res) => {
  try {
    const superadminId = req.params.id; // Extract Superadmin ID from request parameters

    // Find the Superadmin by ID and remove it
    const deletedSuperadmin = await Superadmin.findByIdAndRemove(superadminId);

    if (!deletedSuperadmin) {
      return res.status(404).json({ error: 'Superadmin not found' });
    }

    // Return a success message
    res.status(200).json({ message: 'Superadmin deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete Superadmin' });
  }
};