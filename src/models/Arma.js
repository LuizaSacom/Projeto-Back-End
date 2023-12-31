import mongoose from "mongoose";

const armaSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  nome: {type: String, require: true}, //é obrigatório
  tipo: {type: String},
}, {versionKey: false});

const Arma = mongoose.model("Arma", armaSchema);

export default Arma;
