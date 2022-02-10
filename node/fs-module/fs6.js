const fs = require('fs');
const readStream = fs.createReadStream('./abc.txt');
console.log("at the top...");
let data = "";

readStream.on("data",(chunk)=>{
    data += chunk;
    console.log("data event..");
});
readStream.on("end",()=>{
    console.log(data);
    console.log("end event....");
});
readStream.on("error",(err)=>{
  console.log(err);
});

console.log("At the end...");
