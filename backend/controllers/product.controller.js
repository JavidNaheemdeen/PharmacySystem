const Product = require("../models/product.js");
const bcrypt = require("bcrypt");

// Function to add a new product
exports.addProduct = async (req, res) => {
  try {
    const {
      productname,
      genericname,
      form,
      batchnumber,
      quantity,
      unitprice,
      logo,
      pharmacyId, // Add the pharmacy ID to the request body
    } = req.body;

    const newProduct = new Product({
      productname,
      genericname,
      form,
      batchnumber,
      quantity,
      unitprice,
      logo,
      pharmacyId, // Include the pharmacy ID
    });

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Could not add the product" });
  }
};

// Function to update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Extract the product ID from the URL
    const updateData = req.body; // Data to update

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updateData,
      { new: true } // This option returns the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Could not update the product" });
  }
};

// Function to delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Extract the product ID from the URL

    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete the product" });
  }
};

// Function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve products" });
  }
};

// Function to get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Extract the product ID from the URL

    // Use Mongoose's findById to retrieve the product
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the product" });
  }
};

// Function to search a product by productname
exports.searchProductsByProductname = async (req, res) => {
  try {
    const partialName = req.params.productname; // Extract the partial productname from the URL

    const products = await Product.find({
      productname: { $regex: partialName, $options: "i" },
    });

    if (products.length === 0) {
      return res.status(404).json({
        error: "No products found matching the provided product name",
      });
    }

    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Could not perform the product name search" });
  }
};

// Function to search for products by product name and batch number
exports.searchProductsByNameAndBatchNo = async (req, res) => {
  try {
    const partialName = req.params.name; // Extract the partial name from the URL
    const partialBatchNo = req.params.batchno; // Extract the partial batch number from the URL

    const products = await Product.find({
      $or: [
        { productname: { $regex: partialName, $options: 'i' } },
        { batchnumber: { $regex: partialBatchNo, $options: 'i' } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({
        error: 'No products found matching the provided name and batch number',
      });
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: 'Could not perform the product name and batch number search',
    });
  }
};


// Function to get products by pharmacyId
exports.getProductsByPharmacyId = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId; // Extract the pharmacyId from the URL

    // Use Mongoose's find to retrieve all products for the given pharmacyId
    const products = await Product.find({ pharmacyId });

    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Could not retrieve products by pharmacyId" });
  }
};
