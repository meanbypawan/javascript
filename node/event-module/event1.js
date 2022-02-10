const event = require('events');
//console.log(event);

const eventEmitter = new event.EventEmitter();

    eventEmitter.on('click',()=>{
    console.log("Click event handled..");
    });
    eventEmitter.addListener("data",()=>{
      console.log("data event handled...");
    });
    eventEmitter.on("finish",()=>{
      console.log("finish event handled..");
    });
    eventEmitter.on("error",()=>{
        console.log("It is error event...");
    });
    eventEmitter.on("end",()=>{
        console.log("It is end event");
    });
    eventEmitter.once("hello",()=>{
        console.log("Hello event....");
    })
eventEmitter.emit("click");
eventEmitter.emit("data");
eventEmitter.emit("finish");
eventEmitter.emit("end");
eventEmitter.emit("end");
eventEmitter.removeAllListeners("end");
eventEmitter.emit("end");
eventEmitter.emit("error");
eventEmitter.emit("hello");