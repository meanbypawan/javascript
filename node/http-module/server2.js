const http = require('http');
http.createServer((request,response)=>{
   console.log(request.url);
   //response.writeHead(200,{'Content-Type':'html/text'});
   if(request.url == "/" || request.url =="/home"){
       //response.writeHead(200,{'Content-Type':'text/html'});
       response.write("Hello Node.."); 
       response.write("<h1>Home Page</h1>"); 
       response.end(); 
   }
   else if(request.url == '/about'){
    //response.writeHead(200,{'Content-Type':'html/text'});
    response.write("<h1>About Page</h1>"); 
    response.end();
   }
   else if(request.url == "/contact"){
    //response.writeHead(200,{'Content-Type':'html/text'});
    response.write("<h1>Contact Page</h1>"); 
    response.end();
   }
   else if(request.url == '/add'){
       response.end("/add route...");
   }
}).listen(3000,()=>{
    console.log('server running..')
});