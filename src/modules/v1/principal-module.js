const mongoose = require('mongoose');

const {Schema} = mongoose;

const principalSchema = new Schema({
    Urlvideo: {type:String},
    titulo: {type:String},
    imagen: {type:String},
    descripcion: {type:String},
    citaBiblica: {type:String},
    descripcionBiblica: {type:String},
});

const model = mongoose.model('principal ', principalSchema);

module.exports = model;