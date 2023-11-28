import express from "express";
import HabilidadeController from "../controllers/habilidadeController.js";

const router = express.Router();

router.get("/Habilidade", HabilidadeController.listarHabilidades);
router.get("/Habilidade/:id", HabilidadeController.listarHabilidadePorId);
router.post("/Habilidade", HabilidadeController.cadastrarHabilidade);
router.put("/Habilidade/:id", HabilidadeController.atualizarHabilidade);
router.delete("/Habilidade/:id", HabilidadeController.excluirHabilidade);

export default router;
