const Product =require('../model/product');
exports.addProductPage = (request,response,next)=>{
    response.render("user-admin/add-product",{
        username: ""
    });
 };
 exports.addProductPost = (request,response,next)=>{
   let product=  new Product();
   product.name = request.body.name;
   product.price = request.body.price;
   product.description = request.body.description;
   product.imageUrl = request.body.imageUrl;

   product.save()
   .then(result=>{
       response.send("Product Saved....");
   })
   .catch(err=>{
      response.send("Error.......");    
   });
 };
exports.productList = (request,response,next)=>{
    Product.fetchAll()
    .then(results=>{
       response.render("user-admin/product-list.ejs",{
         username: '',
         productList: results
       });
    })
    .catch(err=>{
        console.log(err);
    });
}
exports.getProductById = (request,response,next)=>{
    Product.fetchProductById(request.params.productId)
    .then(result=>{
      if(result.length>0){
         response.render('user-admin/edit-product.ejs',{
            username : '',
            product: result[0]
         });
      }
    })
    .catch(err=>{
       console.log(err);
    });
 };
exports.updateProduct =  (request,response)=>{
    let p = new Product();
    p.id = request.body.id;
    p.name = request.body.name;
    p.price = request.body.price;
    p.imageUrl = request.body.imageUrl;
    p.description = request.body.description;
    p.update().then(result=>{
       response.redirect("/user/product-list");
    }).catch(err=>{
       console.log(err);
       response.send("Error.....");
    });
 };
exports.deleteProduct = (request,response,next)=>{
    const id = request.params.id;
    Product.delete(id).then(
        ()=>{
            //response.redirect("/user/product-list");
          response.send("Product Deleted...");
        }
    ).catch();
 };












