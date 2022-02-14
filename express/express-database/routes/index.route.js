const express = require('express');
const pool = require('../model/dbconfig');
const router = express.Router();
// http://localhost:3000/
router.get("/",(request,response)=>{
    console.log("Inside index Route");
    response.render("index.ejs");
});

// http://localhost:3000/about
router.get("/about",(request,response)=>{
  response.render("about.ejs");
});

//http://localhost:3000/login
router.get("/login",(request,response)=>{
   response.render("login.ejs");
});

//http://localhost:3000/register
router.get("/register",(request,response)=>{
  response.render("register.ejs");
});
router.post("/register",(request,response)=>{
   pool.getConnection((err,con)=>{
     if(!err){
        let sql = "insert into user(username,email,password) values(?,?,?)"; 
        con.query(sql,[request.body.username,request.body.email,request.body.password],(err,result)=>{
           if(err){
             response.send("<h1>Something went Wrong..</h1>")
           }
           else{
               response.send("Registration Success");
           }
           con.release();
        });
     }
     else
       response.send("<h1>Something went wrong....</h1>");
   });         
});

module.exports = router;
