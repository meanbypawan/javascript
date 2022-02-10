const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on("addition",(a,b)=>{
  console.log("Addition : "+(a+b));
});

eventEmitter.emit("addition",20,10);