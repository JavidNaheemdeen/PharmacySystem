const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller.js");

router.post("/addorder", orderController.addOrder);
router.get('/pharmacy/:pharmacyId', orderController.getOrdersByPharmacyId);
router.put('/updateorder/:id', orderController.updateOrderById);
router.delete('/deleteorder/:id', orderController.deleteOrderById);
router.get('/ordercount/:pharmacyId', orderController.getOrderCountByPharmacyId);
router.get("/user/:userId", orderController.getOrdersByUserId);

module.exports = router;