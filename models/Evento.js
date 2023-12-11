// Importa la biblioteca Mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventoSchema = new Schema({
    nombre: String,
    objetivo: String,
    presupuesto: Number,
    fecha: String,
    horaIni: String,
    horaFin: String,
    direccion: String,
    barrio: String
}, { versionKey: false });

module.exports = mongoose.model('Evento', eventoSchema);