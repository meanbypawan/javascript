const p = new Promise(function(resolve,reject){
    //resolve();
    reject();
});

p.then(function(){
    console.log("Promise is fullfilled....");
},function(){
    console.log("Promise is rejected....");
}).catch(()=>{
  console.log("Inside catch.....");
});