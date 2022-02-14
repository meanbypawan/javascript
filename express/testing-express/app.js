const express = require('express');

const app = express();

app.use((request,response,next)=>{
  console.log("Application level Middleware-1");
  next();
});
app.use((request,response,next)=>{
  console.log("Application level Middleware-2");
  response.send("<h1>Response Frome Express...</h1>");
});


app.listen(3000,()=>{
    console.log("Server Running....");
});