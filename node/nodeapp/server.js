const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');
http.createServer((request,response)=>{
   const requestedUrl =  url.parse(request.url,true);
   console.log(requestedUrl.pathname);
   if(requestedUrl.pathname == "/" || requestedUrl.pathname == "/home"){
     let filePath = path.join(__dirname,'./views',"index.html");
     let responseData = fs.readFileSync(filePath);
     response.writeHead(200,{'Content-Type':'text/html'});
     response.write(responseData);
     response.end(); 
   }
   else if(requestedUrl.pathname.match('\.jpeg')){
       response.writeHead(200,{'Content-Type':'image'});
       let imagePath = path.join(__dirname,requestedUrl.pathname);
       const readStream = fs.createReadStream(imagePath);
       readStream.pipe(response);
   }
   else if(requestedUrl.pathname == "/login"){
      let filePath = path.join(__dirname,'./views/login.html');
      const responseData = fs.readFileSync(filePath);
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(responseData);
      response.end();
   }
   else if(requestedUrl.pathname == "/register"){
    let filePath = path.join(__dirname,'./views/register.html');
    const responseData = fs.readFileSync(filePath);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write(responseData);
    response.end();
   }
   else if(requestedUrl.pathname.match("\.css")){
       response.writeHead(200,{'Content-Type':'text/css'});
       let filePath = path.join(__dirname,requestedUrl.pathname);
       let readStream = fs.createReadStream(filePath);
       readStream.pipe(response);
   }
   else if(requestedUrl.pathname=="/register_task" && request.method == "GET"){
      let email = requestedUrl.query.email;
      let password = requestedUrl.query.password;
      try{
       let con =  mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'nodedb'
        });
        let sql = "insert into user(email,password) values(?,?)";
        con.query(sql,[email,password],(err,result)=>{
          if(err)
            response.end("<h1>Registration Failed..</h1>");
          else
            response.end("Registration Succes...");  
        });
      }
      catch(e){
          console.log(e);
      }
   }
}).listen(3000,()=>{console.log('server running...')});




