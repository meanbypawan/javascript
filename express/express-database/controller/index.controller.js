const User = require('../model/user');
exports.homePage = (request,response)=>{
    console.log("Inside index Route");
    response.render("index.ejs");
}
exports.aboutPage = (request,response)=>{
    response.render("about.ejs");
};

exports.loginPage = (request,response)=>{
    response.render("login.ejs");
};

exports.registerPage = (request,response)=>{
    response.render("register.ejs");
};

exports.loginPost = (request,response)=>{
    let user = new User();
    user.email = request.body.email;
    user.password = request.body.password;
    user.checkUser()
    .then(result=>{
       if(result.length>0){
         console.log(result[0].username);  
         response.render("user-admin/home.ejs",{
           username: result[0].username   
         });
       } 
       else{
          response.send("<h1>Invalid email and password</h1>");
       }
    })
    .catch(err=>{
        console.log(err);
        response.send("<h1>Something went wrong...</h1>");
    });
}
exports.registerPost = (request,response)=>{
    let email = request.body.email;
    let username = request.body.username;
    let password = request.body.password;
    const user = new User(username,email,password);
    user.save()
    .then(result=>{
       response.send("<h1>Registration Success....</h1>");
    })
    .catch(err=>{
        console.log(err);
        response.send("<h1>Something went wrong...</h1>");
    });
 };