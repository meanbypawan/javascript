const express = require('express');
const indexRouter = require('./routes/index.route');
const userRouter = require('./routes/user.route');
const path = require('path');
const bodyParser = require('body-parser');
const { ppid } = require('process');
const app = express();

// To set the view engine
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: false}));

// to set the path of static files
const staticFilePath = path.join(__dirname,"public");
app.use(express.static(staticFilePath));

//http://localhost:3000/user/add-product 
app.use("/user",userRouter);

//http://localhost:3000/
app.use(indexRouter);
app.listen(3000);