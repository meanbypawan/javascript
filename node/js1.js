console.log("Welcome in Node.js");
function Addition(a,b){
    this.a = a;
    this.b = b;
    this.add = function(){
        console.log("Addition : "+(this.a+this.b));
    }
}

var obj = new Addition(20,10);
obj.add();