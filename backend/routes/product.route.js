const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller.js");

router.post("/addproduct", productController.addProduct);
router.put("/updateproduct/:id", productController.updateProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/search/:productname", productController.searchProductsByProductname);
router.get("/pharmacy/:pharmacyId", productController.getProductsByPharmacyId);

module.exports = router;