console.log("At the top......");

const eatingPizza = ()=>{
    console.log("Pizza Done....");
}
const servicingCar = ()=>{
    console.log("Car serviced....");
}
const meetingWithFriends = ()=>{
    console.log("Meeting Done.....");
}

setTimeout(eatingPizza,3000);
setTimeout(servicingCar,5000);
setTimeout(meetingWithFriends,2000);

console.log("At the end.....");