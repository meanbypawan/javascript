console.log('At the Top.....');
const firstName = ()=>{
    console.log("First Name....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Merry");
        },3000);
    });
}
const middleName = ()=>{
    console.log("Middle Name......");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John");
        },2000);
    });
}
const lastName = ()=>{
    console.log("Last Name.......");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Alexan");
        },500);
    });
}
Promise.race([firstName(),middleName(),lastName()])
.then((resolvedData)=>{
  console.log("Resolved callback : "+resolvedData);
},(rejectedData)=>{
  console.log("Reject callback : "+rejectedData);
})
.catch();
console.log("At the end......");