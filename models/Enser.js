// Importa la biblioteca Mongoose
const mongoose = require('mongoose');

const Schema  = mongoose.Schema;
const enserSchema = new Schema({
    nombre: String,
    cantidad: Number,
    precio: Number,
    sede: String
}, { versionKey: false }); 

module.exports = mongoose.model('Enser', enserSchema);
