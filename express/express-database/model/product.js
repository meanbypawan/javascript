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
    static fetchAll(){
       return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
           if(!err){
             let sql = "select * from product";
             con.query(sql,(err,results)=>{
               err ? reject(err) : resolve(results);
               con.release();
             });            
           }
           else
             reject(err);
         });        
       });
    }
    static delete(productId){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
              let sql = "delete from product where id =?";
              con.query(sql,[parseInt(productId)],(err,result)=>{
                err ? reject(err) : resolve(result);
                con.release();
              });
          }
          else
            reject(err);
        });
      });
    }

    static fetchProductById(productId){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
             let sql = "select * from product where id =?";
             con.query(sql,[productId*1],(err,result)=>{
               err ? reject(err) : resolve(result);
               con.release();
             });
          }
          else
            reject(err);
        });
      });
   }
   update(){
     return new Promise((resolve,reject)=>{
       pool.getConnection((err,con)=>{
         if(!err){
           let sql = "update product set name=?,price=?,description=?,imageUrl=? where id=?";
           con.query(sql,[this.name,this.price*1,this.description,this.imageUrl,this.id*1],(err,result)=>{
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










