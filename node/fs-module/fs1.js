const fs = require('fs');

console.log("at the top");

fs.writeFile('./data.txt',"Node.Js is open source",(err)=>{
  err ? console.log(err) : console.log('Operation success');
});

console.log("at the end..");