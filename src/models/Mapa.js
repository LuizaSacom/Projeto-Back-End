import mongoose from "mongoose";

const mapaSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, require: true}, //é obrigatório
  descricao: {type: String}
}, {versionKey: false});

const Mapa = mongoose.model("Mapa", mapaSchema);

export default Mapa;