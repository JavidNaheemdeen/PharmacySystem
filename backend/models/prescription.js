const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  patientname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    required: false,
  },
  yourphone: {
    type: String,
    required: false,
  },
  whatsappnumber: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  choosepharmacy: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  allergry: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
    default:
      "https://res.cloudinary.com/dfmnpw0yp/image/upload/v1679235307/assets/tsuh9f6v1reihgqxwxrz.ico",
  },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
