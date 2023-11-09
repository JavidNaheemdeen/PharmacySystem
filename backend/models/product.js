const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  genericname: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    required: false,
  },
  batchnumber: {
    type: Number,
    required: false,
  },
  quantity: {
    type: Number,
    required: false,
  },
  unitprice: {
    type: Number,
    required: false,
  },
  logo: {
    type: String,
    required: false,
    default:
      "https://res.cloudinary.com/dfmnpw0yp/image/upload/v1679235307/assets/tsuh9f6v1reihgqxwxrz.ico",
  },
  pharmacyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy", // Reference the Pharmacy model
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
