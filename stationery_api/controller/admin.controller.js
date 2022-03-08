const { json } = require('body-parser');
const {validationResult} = require('express-validator');
const Admin = require('../model/admin.model');

exports.signin = (request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});
    Admin.findOne({
        email: request.body.email,
        password: request.body.password
    }).then(result=>{
       if(result)
         return response.status(200).json(result);
       else
         return response.status(404).json({message: 'Invalid User'});   
    }).catch(err=>{
        return response.status(500).json({message: 'Oops! something went wrong'});
    });  
}

exports.signup = (request,response)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.status(403).json({errors: errors.array()});

   Admin.create({
       email: request.body.email,
       password: request.body.password
   }).then(result=>{
       return response.status(201).json(result);
   }).catch(err=>{
       return response.status(500).json({message: 'Oops! something went wrong'});
   });

}