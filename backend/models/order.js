const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    pharmacyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pharmacy", // Reference to the Pharmacy model, adjust accordingly
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Reference to the Product model, adjust accordingly
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    deliveryInfo: {
      address: {
        type: String,
        required: true,
      },
      contactNo: {
        type: String,
        required: true,
      },
    },
    orderDate: {
      type: Date,
      required: true,
    },
    paymentDetails: {
      method: {
        type: String,
        enum: ["Cash on Delivery", "Online Payment"], // Adjust based on your payment methods
        required: true,
      },
      // Add other payment details here based on the selected payment method
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
