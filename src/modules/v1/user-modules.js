const mongoose = require('mongoose');

const{Schema} = mongoose;

const userSchema = new Schema({
    nombre : {type:String, required:true, unique:true},
    password: {type:String, required:true},
    hash: {type:String},
    role:{type:String, enum:['admin', 'standard'], default:'standard'}
});

const model = mongoose.model('user', userSchema);

module.exports = model;