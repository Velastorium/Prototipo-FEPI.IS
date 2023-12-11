// Importa la biblioteca Mongoose
const mongoose = require('mongoose');

const Schema  = mongoose.Schema;
const alquilerSchema = new Schema({
    direccion: String,
    fechaactividad: String,
    fechaentrega: String,
    fecharetorno: String,
    cliente: String,
    barrio: String
}, { versionKey: false }); 

module.exports = mongoose.model('Alquiler', alquilerSchema);
