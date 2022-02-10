const fs = require('fs');

console.log("at the top...");
if(fs.existsSync("./abc.txt")){
  fs.appendFile('./abc.txt',"Node.Js is built upon google v8 engine..",(err)=>{
   err ? console.log(err) : console.log("operation success");
  });
}
console.log("at the end..");