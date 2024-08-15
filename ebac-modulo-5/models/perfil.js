const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
  cliente: {
    nome: {
      type: String,
      required: true,
    },
    sobrenome: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
  },
});

module.exports = PerfilSchema;