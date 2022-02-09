const task1 = ()=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log("Task 1 is completed....");
          resolve();
      },3000);
  });
}
const task2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 2 is completed...");
            reject();
        },5000);
    });
}
const task3 = ()=>{
    console.log("Process task- 3");
}
const task4 = ()=>{
    console.log("Process task-4");
}
Promise.all([task1(),task2()])
.then(()=>{
    task3();
},()=>{
  task4();
})
.catch((err)=>{
    console.log(err);
})


