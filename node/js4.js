// Creating Promise

const p1 = new Promise((resolve,reject)=>{
   //resolve();
   reject();
});

p1.then(()=>{
    console.log("Promise is resolved...");
}).catch(()=>{
    console.log("Promise is rejected...");
});
0
