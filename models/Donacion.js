// Importa la biblioteca Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const donacionSchema = new Schema({
    donador: String,
    articulo: String,
    cantidad: Number,
    descripcion: String,
    fecha: String
}, { versionKey: false });

module.exports = mongoose.model('Donacion', donacionSchema);