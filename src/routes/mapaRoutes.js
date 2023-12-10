import express from "express";
import MapaController from "../controllers/mapaController.js";

const router = express.Router();

router.get("/Mapa", MapaController.listarMapas);
router.get("/Mapa/:id", MapaController.listarMapaPorId);
router.post("/Mapa", MapaController.cadastrarMapa);
router.put("/Mapa/:id", MapaController.atualizarMapa);
router.delete("/Mapa/:id", MapaController.excluirMapa);

export default router;