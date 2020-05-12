const mongoose = require('mongoose');
const Joi = require('joi');
// Joi.objectid = require('joi-objectid')(Joi);



const product_schema = new mongoose.Schema({
    name: {type: String, required:true},
    Description: String,
    PrimaryImage: {type: String, required:true},
    SecondaryImage: String,
    Thumbnail: String,
    Display: Number,
    Price: {type: Number, required:true},
    DescountedPrice: Number,
    ProductCount: Number,
    // Attribute : {
    //     Color: Attribute[],
    //     Size: Attribute[],
    // }

});

const product_validation_schema= {
   
    name: Joi.string().min(4).required(),
    Description: Joi.string(),
    PrimaryImage: Joi.string().required(),
    SecondaryImage: Joi.string(),
    Thumbnail: Joi.string(),
    Display: Joi.number().positive(),
    price : Joi.number().positive(),
    DescountedPrice: Joi.number().negatif(),
    ProductCount: Joi.number().positive(),
    // category : {
    //     category_id : Joi.objectid().required()
    // }
    // department : {
    //     department_id : Joi.objectid().required()
    // }
    // Attribute : {
    //     Color: Attribute[],
    //     Size: Attribute[],
    // }
}


const Student = mongoose.model('Product',product_schema);

module.exports.Product = this.Product;


    
    