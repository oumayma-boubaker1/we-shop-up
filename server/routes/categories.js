const router = require('express').Router();
const { Category, category_not_valide, objectid_not_valid, category_opt_not_valide} = require('../models/category');
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
    let category = new Category(_.pick(req.body,['category_name','description']));
    try{
        category = await category.save();
        return res.status(201).send(category);
    }catch(err){
        return res.status(400).send(`DB error : ${err.message}`)
    }
    
});


// * delete by id
// ? add  middelwares  [auth,autoris]

    router.delete('/id/:id',async (req,res)=>{
        let errors;
        if(errors=objectid_not_valid(req.params)) //id se trouve dans request params
            return res.status(400).send(errors.details[0].message)
        const category = await Category.findByIdAndRemove(req.params.id);
        if(!category)
            return res.status(200).send('category with this id is not found');
        res.send(category);
    });
    

// * Put by id (update)
   
    router.put('/id/:id', async (req,res)=>{
        let errors;
        if(errors= objectid_not_valid(req.params))
            return res.status(400).send(errors.details[0].message)
        // if(errors= category_opt_not_valide(req.params))
        //     return res.status(400).send(errors.details[0].message)
        let category = await Category.findById(req.params.id);
        if(! category)
            return res.status(200).send('category with this id is not found');
        category = _.merge(category,req.body); // merge rectify if the new data is not like the ancient then it updates it
        try{
            const saved_category = await category.save();
            return res.status(201).send(saved_category);
        }catch(err){
            return res.status(400).send(`DB error : ${err.message}`)
        }
    });


module.exports = router;