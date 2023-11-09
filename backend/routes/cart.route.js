// const express = require('express');
// const {
//   createCart,
//   getCartByUserId,
//   updateCart,
//   deleteCart,
//   deleteProductFromCart,
//   getTotalPrice,
//   getCartCount,
// } = require("../controllers/cart.controller.js");
// const cartRouter = express.Router();

// cartRouter.route("/").post(createCart);
// cartRouter
//   .route("/:userId")
//   .get(getCartByUserId)
//   .put(updateCart)
//   .delete(deleteCart);
// cartRouter.route('/:userId/:productId').delete(deleteProductFromCart);
// // cartRouter.route('/:userId/:productId/').put(protect, updateProductQuantity);
// cartRouter.route('/getTotalPrice/:userId').get(getTotalPrice);
// cartRouter
//   .route("/getCartCount/:userId")
//   .get(getCartCount);

// module.exports = cartRouter;
// export default ;


const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller.js");


router.post('/addcart', cartController.createCart);
router.get('/:userId', cartController.getCartByUserId);
router.put('/updatecart/:userId', cartController.updateCart);
router.delete('/deletecart/:userId', cartController.deleteCart);
router.delete('/:userId/product/:productId', cartController.deleteProductFromCart);
router.get('/:userId/totalPrice', cartController.getTotalPrice);
router.get('/:userId/count', cartController.getCartCount);

module.exports = router;
