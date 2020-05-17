const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectid = require('joi-objectid')(Joi);

// ! add " unique: true "
const category_schema = new mongoose.Schema({
    category_name : {type: String, required : true, enum : ['French','Italian','Irish','Animal', 'Flower', 'Valentine\'s']},
    description : String,
    
});

const category_validation_schema= {
    category_name: Joi.string().required(),
    description: Joi.string(),
    
}

const category_opt_validation_schema= {
    category_name: Joi.string(),
    description: Joi.string(),
}
// ********************************************************************** //
const objectid_valid_schema = {
    id: Joi.objectid().required()
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

function category_opt_not_valide(cat) {
    var results = Joi.validate(cat, category_opt_validation_schema);
    return results.error;
}

const Category = mongoose.model('Category', category_schema);


module.exports.Category = Category;
module.exports.category_not_valide = category_not_valide;
module.exports.objectid_not_valid = objectid_not_valid;
module.exports.category_opt_not_valide = category_opt_not_valide;