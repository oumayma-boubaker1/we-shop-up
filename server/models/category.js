const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectid = require('joi-objectid')(Joi);

const category_schema = new mongoose.Schema({
    name : {type: String, required : true, enum : ['French','Italian','Irish','Animal', 'Flower', 'Valentine\'s']},
    description : String
    
});

const category_validation_schema= {
    name: Joi.string().required(),
    description: Joi.string(),
    
}
// ********************************************************************** //
const objectid_valid_schema = {
    id: Joi.objectId().required()
}

function objectid_not_valid(id){
    var results = Joi.validate(id, objectid_valid_schema);
    return results.error;
}
// ********************************************************************** //

function category_not_valide(categ) {
    var results = Joi.validate(categ, category_validation_schema);
    return results.error;
}

const Category = mongoose.model('Category', category_schema);


module.exports.Category = Category;
module.exports.category_not_valide = category_not_valide;
module.exports.objectid_not_valid = objectid_not_valid;
