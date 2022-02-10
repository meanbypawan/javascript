const fs = require('fs');

console.log("At the top");
try{
 fs.writeFileSync('./f1.txt',"It if f1 file data");
 console.log("operationn success"); 
}
catch(e){
    console.log(e);
}
finally{
    console.log("finally executed....");
}
console.log("At the end..");