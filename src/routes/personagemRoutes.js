import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const router = express.Router();

router.get("/Personagem", PersonagemController.listarPersonagens);
router.get("/Personagem/:id", PersonagemController.listarPersonagemPorId);
router.post("/Personagem", PersonagemController.cadastrarPersonagem);
router.put("/Personagem/:id", PersonagemController.atualizarPersonagem);
router.delete("/Personagem/:id", PersonagemController.excluirPersonagem);

export default router;