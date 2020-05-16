const router = require('express').Router();
const { Category, category_not_valide } = require('../models/class_room');
const _ = require('lodash');

router.get('',async (req,res)=>{
    const categories = await Category.find();
    if(categories.length ===0 )
        return res.status(204).end();
    res.send(categories);
}); 

router.post('',async (req,res)=>{
    let errors;
    if(errors=category_not_valide(req.body))
        return res.status(400).send(errors.details[0].message)
    let category = new Category(_.pick(req.body,['name','nb_product']));
    try{
        category = await category.save();
        return res.status(201).send(category);
    }catch(err){
        return res.status(400).send(`DB error : ${err.message}`)
    }
    
});

module.exports = router;