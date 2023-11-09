const Cart = require('../models/cart');
const asyncHandler = require('express-async-handler')
const Product = require('../models/product')

//Create new shopping cart
const createCart = asyncHandler(async (req, res) => {
    const { userId, products } = req.body;
    // try {
      const existingCart = await Cart.findOne({ userId: userId });
  
      if (existingCart) {
        existingCart.products.push(...products);
        const savedCart = await existingCart.save();
        res.status(201).json(savedCart);
      } else {
        const newCart = new Cart({ userId: userId });
        newCart.products.push(...products);
        const cartCount = await Cart.countDocuments();
        newCart.cartId = "CID00" + (parseInt(cartCount) + 1);
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
      }

  });
  
  //Get shopping cart by user id
  const getCartByUserId = asyncHandler(async (req, res) => {
    try {
      // Get cart by userId
      const cart = await Cart.findOne({ userId: req.params.userId });
      // check if cart exists
      if (cart) {
        // Get products in the cart
        const products = await Promise.all(
          cart.products.map(async (item) => {
            const product = await Product.findById(item.product);
            return { product, quantity: item.quantity };
          })
        );
        // Return cart and products
        res.status(200).json({ ...cart.toJSON(), products });
      } else {
        // If cart doesn't exist, return error
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      // Return any server error
      res.status(500).json(err);
    }
  });
  
  //Update shopping cart
  const updateCart = asyncHandler(async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      if (cart) {
        const { product, quantity } = req.body;
        console.log(product);
        console.log(quantity);
        const index = cart.products.findIndex((item) => item.product == product);
        if (index >= 0) {
          cart.products[index].quantity = quantity;
        } else {
          cart.products.push({ product: product, quantity: quantity });
        }
        const updatedCart = await cart.save();
        res.status(200).json(updatedCart);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //Delete shopping cart
  const deleteCart = asyncHandler(async (req, res) => {
    try {
      // Find cart by userId and delete
      const cart = await Cart.findOne({ userId: req.params.userId });
      // Check if cart exists
      if (cart) {
        await cart.deleteOne();
        console.log(cart)
        res.status(200).json({ message: "Cart deleted successfully" });
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //Delete product from shopping cart
  const deleteProductFromCart = asyncHandler(async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      if (cart) {
        cart.products = cart.products.filter(
          (item) => item.product != req.params.productId
        );
        const updatedCart = await cart.save();
        res.status(200).json(updatedCart);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //Get total price of shopping cart
  const getTotalPrice = asyncHandler(async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId })
        // .populate("userId", "name")
        .populate("products.product", "unitprice");
      if (cart) {
        let totalPrice = 0;
        cart.products.forEach((item) => {
          if (item.product && item.product.unitprice) {
            totalPrice += item.product.unitprice * item.quantity;
          }
        });
        // console.log(totalPrice);
        res.status(200).json({ totalPrice });
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  //Get the count of products in the cart
  const getCartCount = asyncHandler(async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      if (cart) {
        let count = 0;
        cart.products.forEach((item) => {
          count += 1;
        });
        res.status(200).json({ count });
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = {
    createCart,
    getCartByUserId,
    updateCart,
    deleteCart,
    deleteProductFromCart,
    getTotalPrice,
    getCartCount,
  };