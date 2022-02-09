function Arithmetic(){
   
    this.addition = (a,b)=>{
      return a+b;
    }
    this.sub = (a,b)=>{
      return a-b;
    }
    this.multiplication = (a,b)=>{
      return a*b;
    }
}

module.exports = new Arithmetic();
