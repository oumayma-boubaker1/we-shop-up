const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectid = require('joi-objectid')(Joi);

const category_schema = new mongoose.Schema({
    name : {type: String, required : true, enum : ['French','Italian','Irish','Animal', 'Flower', 'Valentine\'s']},
    nb_product : {type : Number, default :0},
    types : [String]
});

const category_validation_schema= {
    name: Joi.string().length(4).required(),
    nb_product: Joi.number().positive(),
    types: Joi.array().items(Joi.string().min(3))
}

function category_not_valide(categ) {
    var results = Joi.validate(categ, category_validation_schema);
    return results.error;
}

const Category = mongoose.model('Category', category_schema);

module.exports.Category = Category;
module.exports.category_not_valide = category_not_valide;