const http = require('http');

const server = http.createServer((request,response)=>{
     response.write("Welcome in Node Application");
     response.end();
});

server.listen(3000,()=>{
  console.log("Server runnint at htpp://localhost:3000");
});