import express from "express";
import MapaController from "../controllers/mapaController.js";

const router = express.Router();

router.get("/mapa", MapaController.listarMapas);
router.get("/mapa/:id", MapaController.listarMapaPorId);
router.post("/mapa", MapaController.cadastrarMapa);
router.put("/mapa/:id", MapaController.atualizarMapa);
router.delete("/mapa/:id", MapaController.excluirMapa);

export default router;