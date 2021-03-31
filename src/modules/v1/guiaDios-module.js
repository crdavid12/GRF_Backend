const mongoose = require('mongoose');

const {Schema} = mongoose;

const guiaDiosSchema = new Schema({
    url: {type:String, required:true},
    titulo: {type:String, required:true},
    descripcion: {type:String, required:true},
    publicacion: {type:Boolean, default:true}
});

const model = mongoose.model('guiaDios', guiaDiosSchema);

module.exports = model;