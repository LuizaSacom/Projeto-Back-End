import mongoose from "mongoose";

const habilidadeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
});

const Habilidade = mongoose.model("Habilidade", habilidadeSchema);

export {Habilidade, habilidadeSchema};
