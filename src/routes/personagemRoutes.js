import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const router = express.Router();

router.get("/personagem", PersonagemController.listarPersonagens);
router.get("/personagem/busca", PersonagemController.listarPersonagensPorFuncao);
router.get("/personagem/:id", PersonagemController.listarPersonagemPorId);
router.post("/personagem", PersonagemController.cadastrarPersonagem);
router.put("/personagem/:id", PersonagemController.atualizarPersonagem);
router.delete("/personagem/:id", PersonagemController.excluirPersonagem);

export default router;