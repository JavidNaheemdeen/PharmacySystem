const mongoose = require("mongoose");

const supadminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});

const Superadmin = mongoose.model("Superadmin", supadminSchema);

module.exports = Superadmin;
