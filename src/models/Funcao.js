import mongoose from "mongoose";

const funcaoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  funcao: {type: String, require: true}, //é obrigatório
  descricao: {type: String}
}, {versionKey: false});

const funcao = mongoose.model("funcao", funcaoSchema);

export {funcao, funcaoSchema};
