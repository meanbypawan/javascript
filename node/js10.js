const firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Merry");
        },3000);
    });
}
const middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John");
        },4000);
    });
}
const lastName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Alexan");
        },2000);
    });
}
Promise.all([firstName(),middleName(),lastName()])
.then((resolvedData)=>{
  console.log(resolvedData[0]+" "+resolvedData[1]+" "+resolvedData[2]);
},(rejectedData)=>{
    console.log(rejectedData);
})
.catch();