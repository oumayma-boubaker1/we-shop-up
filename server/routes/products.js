const router = require('express').Router();
const { Product, objectid_not_valid } = require('../models/product');
const _ = require('lodash');
// const { Category } = require('../models/category');
const auth = require('../middlewares/auth')
// const autoris = require('../middlewares/autoris')
// const validateObjectId = require('../middlewares/validateObjectId')

router.get('',async (req,res)=>{
    const products = await Product.find();
    if(products.length ===0 )
        return res.status(204).end();
    res.send(products);
});

router.post('',async (req,res)=>{
     //validation par joi
     let errors;
     if(errors=product_not_valide(req.body))
         return res.status(400).send(errors.details[0].message)
     const product = new Product(_.pick(req.body,['name','price']));
    
     let category = await Category.findById(product.class_room.class_room_id);
     if(!category)
         return res.status(400).send('Category not found with the given id');
         product.category.name = category.name;
     try{
         const saved_product = await product.save();
         category.nb_product += 1;
         await category.save();
         return res.status(201).send(saved_product);
     }catch(err){
         return res.status(400).send(`DB error : ${err.message}`)
     }    
 });

//post article
router.post('', async (req, res) => {
    const product =  await Product(req.body);
        res.send({message:'product add ok'});
        product.save();
            (error) => {
        res.sendStatus(500)
        console.error(`DB error : ${error.message}`)
    }

});


 //get by id

router.get('/id/:id',async (req,res)=>{
    const product = await Product.findById(req.params.id);
    if(! product)
        return res.status(204).end();
    res.send(product);
});


//delete by id
// router.delete('/id/:id',[auth,autoris],async (req,res)=>{

router.delete('/id/:id',async (req,res)=>{
    let errors;
    if(errors=objectid_not_valid(req.params))
        return res.status(400).send(errors.details[0].message)
    const product = await Student.findByIdAndRemove(req.params.id);
    if(!product)
        return res.status(200).send('Product with this id is not found');
    res.send(product);
});




module.exports = router ;
