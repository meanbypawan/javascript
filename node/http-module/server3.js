const http = require('http');
const url = require('url');
http.createServer((request,response)=>{
   const requestedUrl = url.parse(request.url,true);
   //console.log(requesteUrl);
    //response.writeHead(200,{'Content-Type':'html/text'});
   if(requestedUrl.pathname == "/" || requestedUrl.pathname =="/home"){
       response.writeHead(200,{'Content-Type':'text/html'});
       response.write("Hello Node.."); 
       response.write("<h1>Home Page</h1>"); 
       response.end(); 
   }
   else if(requestedUrl.pathname == '/about'){
    response.writeHead(200,{'Content-Type':'html/text'});
    response.write("<h1>About Page</h1>"); 
    response.end();
   }
   else if(requestedUrl.pathname == "/contact"){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Contact Page</h1>"); 
    response.end();
   }
   else if(requestedUrl.pathname == '/add'){
      response.writeHead(200,{'Content-Type':'text/html'}); 
      let a = requestedUrl.query.a * 1;
      let b = requestedUrl.query.b*1;
      response.end("<h1>Addition : "+(a+b)+"</h1>");
   }
}).listen(3000,()=>{
    console.log('server running..')
});