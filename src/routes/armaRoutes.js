import express from "express";
import ArmaController from '../controllers/armaController.js';

const router = express.Router();

router.get("/Arma", ArmaController.listarArmas);
router.get("/Arma/:id", ArmaController.listarArmaPorId);
router.post("/Arma", ArmaController.cadastrarArma);
router.put("/Arma/:id", ArmaController.atualizarArma);
router.delete("/Arma/:id", ArmaController.excluirArma);

export default router;
