const User = require("../models/user.js");
const bcrypt = require("bcrypt");

// Function to add a new user
exports.addUser = async (req, res) => {
  try {
    const { name, email, address, contact, password } = req.body;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds, you can adjust it

    const newUser = new User({
      name,
      email,
      address,
      contact,
      password: hashedPassword, // Store the hashed password
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Could not add the user' });
  }
};

// Function to update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract User ID from request parameters
    const updates = req.body; // Data to update

    // Find the user by ID and update the data
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the updated user
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Could not update user' });
  }
};

// Function to delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id; // Extract User ID from request parameters

    // Find the user by ID and delete it
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return a success message
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete user' });
  }
};

// Function to get all users
exports.getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
};


// Function to get a user by ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id; // Extract User ID from request parameters
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve user' });
  }
};

// Function to authenticate a user
exports.authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JWT (JSON Web Token) for user authentication
    const token = jwt.sign({ _id: user._id }, 'your_secret_key'); // Replace 'your_secret_key' with a secret key for JWT

    // Authentication successful
    res.status(200).json({ message: 'Logged in successfully', token, _id: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Could not authenticate user' });
  }
};