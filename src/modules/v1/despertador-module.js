const mongoose = require('mongoose');

const {Schema} = mongoose;

const despertadorSchema = new Schema({
    imagen: {type: String, required:true},
    momento: {type:String, default:'Despertador de hoy'}
    // publicacion: {type:Boolean, default:true}
});

const model = mongoose.model('despertador', despertadorSchema);

module.exports= model;