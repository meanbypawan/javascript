const express = require('express');
const pool = require('../model/dbconfig');
const router = express.Router();
const indexRouter = require('../controller/index.controller');


router.get("/",indexRouter.homePage);

router.get("/about",indexRouter.aboutPage);

router.get("/login",indexRouter.loginPage);

router.post("/login",indexRouter.loginPost);

router.get("/register",indexRouter.registerPage);

router.post("/register",indexRouter.registerPost);

module.exports = router;
