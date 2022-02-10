console.log(__dirname);
console.log(__filename);

setTimeout(function(){
    console.log("Hello......")
},3000);

const interval = setInterval(() => {
    console.log("Time insterval...");
}, 2000);

setTimeout(()=>{
  clearInterval(interval);
},5000);