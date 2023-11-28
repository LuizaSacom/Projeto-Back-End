const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  arma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Arma',
    required: true,
  },
});

const Personagem = mongoose.model('Personagem', personagemSchema);

module.exports = Personagem;
