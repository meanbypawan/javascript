const fs = require('fs');
const readStream = fs.createReadStream('./abc.txt');
const writeStream = fs.createWriteStream('./copy.txt');

readStream.pipe(writeStream);