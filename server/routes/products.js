const router = require('express').Router();
const { Product, product_not_valide, objectid_not_valid, product_opt_not_valide } = require('../models/product');
const _ = require('lodash');
// const { Category } = require('../models/category');
const auth = require('../middlewares/auth')
// const autoris = require('../middlewares/autoris')
// const validateObjectId = require('../middlewares/validateObjectId')

router.get('',async (req,res)=>{
    // find is a async method that's why we use async await
    const products = await Product.find();
    if(products.length ===0 )
        return res.status(204).end();
    res.send(products);
});

// ! add  => [auth,autoris],

router.post('',async (req,res)=>{  
     //validation par joi
     let errors;
     if(errors = product_not_valide(req.body))
         return res.status(400).send(errors.details[0].message)
     const product = new Product(_.pick(req.body,['name','Price']));
    
     let category = await Category.findById(product.category.category_id);
     if(!category)
         return res.status(400).send('Category not found with the given id');
         product.category.category_name = category.category_name;
     try{
         const saved_product = await product.save();
         category.nb_product += 1;
         await category.save();
         return res.status(201).send(saved_product);
     }catch(err){
         return res.status(400).send(`DB error : ${err.message}`)
     }    
 });

// ********************************************************************************* //
// //post product
// router.post('', async (req, res) => {
//     //console.log("post request!" +JSON.stringify(req.body));
//     let errors;
//     if(errors = product_not_valide(req.body))
//         return res.status(400).send(errors.details[0].message)
        
//     const product =  await Product(req.body);
//         res.send({message:'product add ok'});
//         product.save();

//             (error) => {
//         res.sendStatus(500)
//         console.error(`DB error : ${error.message}`)
//     }
// });

// ************************************************************************* //
 //get by id
 // localhost:3000/products/id/....

router.get('/id/:id',async (req,res)=>{
    let errors;
    if(errors=objectid_not_valid(req.params))
        return res.status(400).send(errors.details[0].message)
    const product = await Product.findById(req.params.id);
    if(! product)
        return res.status(204).end();
    res.send(product);
});


//delete by id
// router.delete('/id/:id',[auth,autoris],async (req,res)=>{

router.delete('/id/:id',async (req,res)=>{
    let errors;
    if(errors=objectid_not_valid(req.params)) //id se trouve dans request params
        return res.status(400).send(errors.details[0].message)
    const product = await Product.findByIdAndRemove(req.params.id);
    if(!product)
        return res.status(200).send('Product with this id is not found');
    res.send(product);
});

//Put by id (update)

router.put('/id/:id', async (req,res)=>{
    let errors;
    if(errors=objectid_not_valid(req.params))
        return res.status(400).send(errors.details[0].message)
    if(errors= product_opt_not_valide(req.params))
        return res.status(400).send(errors.details[0].message)
    let product = await Product.findById(req.params.id);
    if(! product)
        return res.status(200).send('Product with this id is not found');
    product = _.merge(product,req.body); // rectify if the new data is not like the ancient then it updates
    try{
        const saved_product = await product.save();
        return res.status(201).send(saved_product);
    }catch(err){
        return res.status(400).send(`DB error : ${err.message}`)
    }
});

// count products with price between an intervall

router.get('/count/Price/min/:min_price/max/:max_price', async (req,res)=>{
    if(errors=product_opt_not_valide(req.params)) 
        return res.status(400).send(errors.details[0].message)
    if(req.params.min_price > req.params.max_price)
    return res.status(400).send('min_price must be less or equals max_price')
    const products = await Product.find({Price : { $gte :req.params.min_price, $lte: req.params.max_price}});
    res.send(`${products.length} is the number of products with the price between [${req.params.min_price},${req.params.max_price}]`);
}) 

// ptoducts name and id of products with name contains a given string %like%
router.get('/name/like/:part_name', async (req,res)=>{
    if(errors= product_opt_not_valide(req.params))
        return res.status(400).send(errors.details[0].message)
    const products = await Product.find({name : { $regex : req.params.part_name, $options:"i"}})
                                    .select('name');
    res.send(products);
})

module.exports = router ;
