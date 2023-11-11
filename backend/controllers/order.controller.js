const Order = require("../models/order.js");
const bcrypt = require("bcrypt");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { pharmacyId, products, deliveryInfo, orderDate, paymentDetails } =
      req.body;

    // Create a new order using the Order model
    const newOrder = new Order({
      pharmacyId,
      products,
      deliveryInfo,
      orderDate,
      paymentDetails,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
