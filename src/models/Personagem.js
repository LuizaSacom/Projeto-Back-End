import mongoose from "mongoose";
import { funcaoSchema } from "./Funcao.js";
import { nacionalidadeSchema } from "./Nacionalidade.js";

const personagemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true }, // é obrigatório
  nacionalidade: { type: mongoose.Schema.Types.ObjectId, ref: 'Nacionalidade' },
  descricao: { type: String },
  funcao: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcao' }
}, { versionKey: false });

const Personagem = mongoose.model("Personagem", personagemSchema);

export default Personagem;