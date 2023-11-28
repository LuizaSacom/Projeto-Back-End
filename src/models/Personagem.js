import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, require: true}, //é obrigatório
  habilidades: {type: String},
  nacionalidade: {type: mongoose.Schema.Types.ObjectId},
  descricao: {type: String},
  funcao: {type: mongoose.Schema.Types.ObjectId}
}, {versionKey: false});

const Personagem = mongoose.model("Personagem", personagemSchema);

export {Personagem, personagemSchema};
