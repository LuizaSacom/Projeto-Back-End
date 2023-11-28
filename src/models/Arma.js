const mongoose = require('mongoose');

const armaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
  accuracy: { //precisão
    type: Number,
    required: true,
  },
});

const Arma = mongoose.model('Arma', armaSchema);

module.exports = Arma;
