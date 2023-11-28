const mongoose = require('mongoose');

const mapaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const Mapa = mongoose.model('Mapa', mapaSchema);

module.exports = Mapa;