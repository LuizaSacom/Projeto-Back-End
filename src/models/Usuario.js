const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }, // Propriedade que indica se o usuário é um administrador
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;