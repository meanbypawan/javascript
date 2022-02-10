const fs = require('fs');
const writeStream = 
 fs.createWriteStream('./f2.txt',{flags:'a'});

writeStream.write("fadsfdkdf fdfdfdfd  ");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("operation succes...");
});
writeStream.on("error",(err)=>{
    console.log(err);
});