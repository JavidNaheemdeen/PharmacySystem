const mongoose = require('mongoose');

const orderProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Assuming you have a Product model
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  pharmacyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacy', // Assuming you have a Pharmacy model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  products: [orderProductSchema],
  noOfItems: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  patientAddress: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  orderDate: {
    type: String,
    default: getSriLankanDateTime(),
  },
});

// Function to get the formatted current date and time in Sri Lankan format
function getSriLankanDateTime() {
  const currentDateTime = new Date();
  const options = {
    timeZone: 'Asia/Colombo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(currentDateTime);
  return formattedDateTime;
}

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
