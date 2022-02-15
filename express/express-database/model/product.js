const pool = require('./dbconfig');
module.exports = class Product{
    constructor(name,price,description,imageUrl){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save(){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
              if(!err){
                let sql = "insert into product(name,price,description,imageUrl) values(?,?,?,?)";
                con.query(sql,[this.name,this.price,this.description,this.imageUrl],(err,result)=>{
                  err ? reject(err) : resolve(result);
                  con.release();
                });
              }
              else
                reject(err);
          });
        });
    }
}