const express = require('express');
const path = require("path");
const app = express();

app.get("/",(request,response,next)=>{
  //response.render("index.html");
  const filePath = path.join(__dirname,"index.html");
  response.sendFile(filePath);
});
app.get("/about",(request,response,next)=>{
    response.status(200);
    response.send("About Page");
});
app.get("/contact",(request,response,next)=>{
  response.status(200).send("Contact Page");
});
app.get("/register",(request,response)=>{
   response.status(200).send("Register Page");
});
app.use((request,response,next)=>{
  response.status(404)
  .send("<h1>Requested Resource not available.....</h1>");
});
app.listen(3000,()=>{
    console.log("Server Running...");
})