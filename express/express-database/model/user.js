const pool = require('./dbconfig');
module.exports = class User{
    constructor(username,email,password){
     this.username = username;
     this.email = email;
     this.password = password;
    }
    checkUser(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                let sql = "select * from user where email = ? and password = md5(?)";
                con.query(sql,[this.email,this.password],(err,result)=>{
                  if(err) reject(err);
                  else
                    resolve(result);
                });
              }  
              else
                reject(err);
           }); 
        });
    } 
    save(){
      return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
              if(err) reject(err);
              else{
                let sql = "insert into user(email,password,username) values(?,md5(?),?)";  
                con.query(sql,[this.email,this.password,this.username],(err,result)=>{
                  con.release();
                  if(err) reject(err);
                  else
                    resolve(result);
                });  
              }
          });
      });    
    }
}








