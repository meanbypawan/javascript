const express = require('express');
const userController = require('../controller/user.controller');
const Product = require('../model/product');
const router = express.Router();

// http://localhost:3000/user/add-product
router.get("/add-product",userController.addProductPage);

router.post("/add-product",userController.addProductPost);

router.get("/product-list",userController.productList);

router.get('/delete-product/:id',userController.deleteProduct);

router.post("/edit-product",userController.updateProduct);

router.get("/edit-product/:productId",userController.getProductById);

module.exports = router;








