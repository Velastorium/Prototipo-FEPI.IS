// Importa la biblioteca Mongoose
const mongoose = require('mongoose');

const Schema  = mongoose.Schema;
const clienteSchema = new Schema({
    nombre: String,
    documento: Number,
    telefono: Number,
    direccion: String,
    tipopersona: String,
    barrio: String
}, { versionKey: false }); 

module.exports = mongoose.model('Cliente', clienteSchema);