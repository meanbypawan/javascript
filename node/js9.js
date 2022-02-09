const p1 = new Promise((resolve,reject)=>{
    //resolve("Hello....");
    reject("Hello upon rejection....");
});

p1.then((resolvedData)=>{
    console.log(resolvedData);
},(rejectedData)=>{
    console.log(rejectedData);
}).catch();