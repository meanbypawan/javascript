const fs = require('fs');

const readFileF1 = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./f1.txt',(err,data)=>{
            err ? reject(err) : resolve(data);
        });
    });
};
const readFileF2 = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./f2.txt',(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
};

Promise.all([readFileF1(),readFileF2()])
.then((results)=>{
    fs.writeFile('./f3.txt',results,(err)=>{
      err ? console.log(err) : console.log("operation success");
    });
},(err)=>{
  console.log(err);
})
.catch((e)=>{
    console.log("Something went wrong "+e);
});




