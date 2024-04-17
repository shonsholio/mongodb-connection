const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    id: Number,
    nombre: String,
    telefono: Number
  })

const MongoPrueba = mongoose.model('prueba', UserScheme)

module.exports = MongoPrueba