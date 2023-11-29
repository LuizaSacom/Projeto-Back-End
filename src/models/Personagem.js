import mongoose from "mongoose";
import { funcaoSchema } from "./Funcao.js";
import { nacionalidadeSchema } from "./Nacionalidade.js";

const personagemSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, require: true}, //é obrigatório
  habilidades: {type: String},
  nacionalidade: nacionalidadeSchema,
  descricao: {type: String},
  funcao: funcaoSchema
}, {versionKey: false});

const Personagem = mongoose.model("Personagem", personagemSchema);

export default Personagem;
