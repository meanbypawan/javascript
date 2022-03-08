const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/restapidemo");
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin.route');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.routes');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/admin",adminRouter);
app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter);

app.listen(3000);
