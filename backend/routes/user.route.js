const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/adduser", userController.addUser);
router.put("/updateuser/:id", userController.updateUser);
router.delete("/deleteuser/:id", userController.deleteUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/authenticate", userController.authenticateUser);


module.exports = router; 