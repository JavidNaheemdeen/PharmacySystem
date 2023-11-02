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
    type: String,
    required: false,
  },
  quantity: {
    type: String,
    required: false,
  },
  unitprice: {
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
