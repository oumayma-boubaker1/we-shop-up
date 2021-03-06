const mongoose = require('mongoose');
// joi needs schema and a function to validate
const Joi = require('joi');
Joi.objectid = require('joi-objectid')(Joi);


const product_schema = new mongoose.Schema({
    name: {type: String, required:true},
    Description: String,
    PrimaryImage: String,
    SecondaryImage: String,
    Thumbnail: String,
    Display: Number,
    Price: Number,
    DescountedPrice: Number,
    ProductCount: Number,
    Color: String,
    Size: String, 
    
    category : {
        category_id : {
            type: mongoose.Schema.ObjectId, 
            ref :'Category'
        },
        category_name: {
            type: String, 
            required : true,
            enum : ['Traditional', 'French','Italian','Animal', 'Flower', 'Valentine\'s']
        }
    }
    
});


//   ************************************************ 


const product_validation_schema= {
   
    name: Joi.string().min(4),
    Description: Joi.string(),
    PrimaryImage: Joi.string(),
    SecondaryImage: Joi.string(),
    Thumbnail: Joi.string(),
    Display: Joi.number().positive(),
    Price : Joi.number().positive(),
    DescountedPrice: Joi.number(),
    ProductCount: Joi.number().positive(),
    Color: Joi.string(),
    Size: Joi.string(),
    category : {
        category_id : Joi.objectid().required()
    }
   
}

const product_opt_validation_schema= {
   
    name: Joi.string().min(8),
    part_name: Joi.string(),
    Description: Joi.string(),
    PrimaryImage: Joi.string(),
    SecondaryImage: Joi.string(),
    Thumbnail: Joi.string(),
    Display: Joi.number().positive(),
    Price : Joi.number().positive(),
    min_price: Joi.number().positive(),
    max_price: Joi.number().positive(),
    DescountedPrice: Joi.number(),
    ProductCount: Joi.number().positive(),
    Color: Joi.string(),
    Size: Joi.string(),
    category : {
        category_id : Joi.objectid().required()
    }
}

function product_opt_not_valide(prod) {
    
    var results = Joi.validate(prod, product_opt_validation_schema);
    return results.error;
}
// *****************************************************  //
const objectid_valid_schema = {
    id: Joi.objectid().required()
}

function objectid_not_valid(id){
    var results = Joi.validate(id, objectid_valid_schema);
    return results.error;
}
// ************************************************ //
function product_not_valide(product) {
    var results = Joi.validate(product, product_validation_schema);
    return results.error;
}

// ************************************************ //

// create collection product_schema basé sur 'Product' (schema )
const Product = mongoose.model('Product',product_schema);

module.exports.Product = Product;
module.exports.product_not_valide = product_not_valide;
module.exports.objectid_not_valid = objectid_not_valid;
module.exports.product_opt_not_valide = product_opt_not_valide;

    
    