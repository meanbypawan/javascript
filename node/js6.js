const roomCleaning = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Room Cleaned...");
            reject();
        },3000);
    });
}
const removingGarbage = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Grabage removed...");
            resolve();
        },5000);
    });
}
Promise.all([roomCleaning(),removingGarbage()])
.then(()=>{
    console.log("I got Ice-cream.....");
})
.catch(()=>{
    console.log("I lost Ice-cream...");
});
