const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
http.createServer((request,response)=>{
   let parsedUrl = url.parse(request.url,true);
   if(parsedUrl.pathname == "/" || parsedUrl.pathname == "/home"){
        let indexFilePath =  path.join(__dirname,"index.html");
        let data = fs.readFileSync(indexFilePath);
        response.end(data);
   }
}).listen(3000);