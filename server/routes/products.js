const router = require('express').Router();
const { Product } = require('../models/product');
const _ = require('lodash');
const { Category } = require('../models/category');
// const auth = require('../middlewares/auth')
// const autoris = require('../middlewares/autoris')
// const validateObjectId = require('../middlewares/validateObjectId')

router.get('',async (req,res)=>{
    const products = await Student.find();
    if(products.length ===0 )
        return res.status(204).end();
    res.send(products);
});

router.post('',auth,async (req,res)=>{
     //validation par joi
     let errors;
     if(errors=product_not_valide(req.body))
         return res.status(400).send(errors.details[0].message)
     const product = new Student(_.pick(req.body,['name','','','price','category','department']));
    //  let category = await Category.findById(product.class_room.class_room_id);
    //  if(!category)
    //      return res.status(400).send('Category not found with the given id');
    //      product.category.name = category.name;
    //  try{
    //      const saved_product = await product.save();
    //      category.nb_product += 1;
    //      await category.save();
         return res.status(201).send(saved_product);
    //  }catch(err){
    //      return res.status(400).send(`DB error : ${err.message}`)
    //  }
     
 });

module.exports = router;