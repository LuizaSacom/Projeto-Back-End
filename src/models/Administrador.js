import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, require: true}, //é obrigatório
  email: {type: String},
  senha: {type: String}
}, {versionKey: false});

const administrador = mongoose.model("administrador", adminSchema);

export default administrador;