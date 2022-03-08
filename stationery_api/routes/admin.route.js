const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');
const { body } = require('express-validator');
// http://localhost:3000/api/admin/signup
// request (email,password)
router.post("/signup",
    body('email').isEmail(),
    body('password', 'password length must be 5 letter long').isLength(5),
    adminController.signup
);
// http://localhost:3000/api/admin/signin
// request-body (email,password)
router.post("/signin",
    body("email", "Inalid Email Id").isEmail(),
    body("password").not().isEmpty(),
    adminController.signin
);
module.exports = router;