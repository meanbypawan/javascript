const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();

// http://localhost:3000/user/add-product
router.get("/add-product",userController.addProductPage);

router.post("/add-product",userController.addProductPost);

module.exports = router;