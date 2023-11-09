const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  patientname: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: false,
  },
  yourphone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  choosepharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy", // Reference the Pharmacy model
  },
  gender: {
    type: String,
    required: false,
  },
  allergy: {
    type: String,
    required: false,
  },
  pic: {
    type: String,
    required: false,
    default:
      "https://res.cloudinary.com/dfmnpw0yp/image/upload/v1679235307/assets/tsuh9f6v1reihgqxwxrz.ico",
  },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
