import mongoose from "mongoose";

const funcaoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  funcao: {type: String, require: true}, //é obrigatório
  descricao: {type: String},
}, {versionKey: false});

const Funcao = mongoose.model("Funcao", funcaoSchema);

export {Funcao, funcaoSchema};
