const mongoose = require('mongoose');

const {Schema} = mongoose;

const reflexionesSchema = new Schema({
    url: {type:String, required:true},
    titulo: {type:String, required:true},
    descripcion: {type:String, required:true},
    publicacion: {type:Boolean, default:true}
});

const model = mongoose.model('reflexiones', reflexionesSchema);

module.exports = model;