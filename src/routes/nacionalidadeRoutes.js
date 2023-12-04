import express from "express";
import NacionalidadeController from "../controllers/nacionalidadeController.js";

const router = express.Router();

router.get("/nacionalidade", NacionalidadeController.listarNacionalidades);
router.get("/nacionalidade/:id", NacionalidadeController.listarNacionalidadePorId);
router.post("/nacionalidade", NacionalidadeController.cadastrarNacionalidade);
router.put("/nacionalidade/:id", NacionalidadeController.atualizarNacionalidade);
router.delete("/nacionalidade/:id", NacionalidadeController.excluirNacionalidade);

export default router;