  const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type:String , unique :true , required :true},
    password: String,
});

module.exports = mongoose.model('User', userSchema);