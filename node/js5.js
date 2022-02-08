const evenOdd = (n)=>{
   return new Promise((resolve,reject)=>{
     if(n%2==0)
       resolve("Number is even");
     else
       reject("Number is odd");   
   });   
}

evenOdd(10).then((message)=>{
  console.log(message);
}).catch((message)=>{
    console.log(message);
});