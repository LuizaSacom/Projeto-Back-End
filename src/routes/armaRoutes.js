import express from "express";
import ArmaController from '../controllers/armaController.js';

const router = express.Router();

router.get("/arma", ArmaController.listarArmas);
router.get("/arma/:id", ArmaController.listarArmaPorId);
router.post("/arma", ArmaController.cadastrarArma);
router.put("/arma/:id", ArmaController.atualizarArma);
router.delete("/arma/:id", ArmaController.excluirArma);

export default router;
