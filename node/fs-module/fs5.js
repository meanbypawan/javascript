const fs = require('fs');
const data = fs.readFileSync('./abc.txt','utf8');
console.log(data);