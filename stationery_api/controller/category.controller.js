const Category = require('../model/category.model');
const {validationResult} = require('express-validator');


exports.deleteCategory = (request,response)=>{
    Category.deleteOne({_id: request.params.id})
    .then(result=>{
      if(result.deletedCount)
        return response.status(202).json({message: 'success'});
      else
        return response.status(204).json({message: 'not deleted'});  
    })
    .catch(err=>{
      return response.status(500).json({message: 'Something went wrong'});
    });
}
exports.getCategory = (request,response)=>{
    Category.find().
    then(results=>{
        return response.status(200).json(results);
    })
    .catch(err=>{
        return response.status(500).json({message: 'Sever Error'});
    });
}
exports.update = (request,response,next)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});
    Category.updateOne({_id: request.body.categoryId},
        {
            $set:{
                categoryName: request.body.categoryName,
                categoryImageUrl: "http://localhost:3000/images/"+request.file.filename
            }
        }).then(result=>{
             if(result.modifiedCount)
              return response.status(204).json({message: 'success'});
             else
              return response.status(404).json({message: 'record not found'})
        }).catch(err=>{
          return response.status(500).json({message: 'Something went wrong..'});
        });
}
exports.add = (request,response,next)=>{
  console.log(request.body);
  console.log(request.file);  
  const errors = validationResult(request);
  if(!errors.isEmpty())
    return response.status(400).json({errors: errors.array()});
  
  Category.create({
    categoryName: request.body.categoryName,
    categoryImageUrl: "http://localhost:3000/images/"+request.file.filename
  })
  .then(result=>{
      return response.status(201).json(result);
  })
  .catch(err=>{
      return response.status(403).json({message: "Oops! Something went wrong.."});
  });  
}