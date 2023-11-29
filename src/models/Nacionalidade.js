import mongoose from "mongoose";

const nacionalidadeSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  origem: {type: String, require: true}, //é obrigatório
}, {versionKey: false});

const Nacionalidade = mongoose.model("Nacionalidade", nacionalidadeSchema);

export {Nacionalidade, nacionalidadeSchema};