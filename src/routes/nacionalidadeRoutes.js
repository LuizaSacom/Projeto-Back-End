import express from "express";
import NacionalidadeController from "../controllers/nacionalidadeController.js";

const router = express.Router();

router.get("/Nacionalidade", NacionalidadeController.listarNacionalidades);
router.get("/Nacionalidade/:id", NacionalidadeController.listarNacionalidadePorId);
router.post("/Nacionalidade", NacionalidadeController.cadastrarNacionalidade);
router.put("/Nacionalidade/:id", NacionalidadeController.atualizarNacionalidade);
router.delete("/Nacionalidade/:id", NacionalidadeController.excluirNacionalidade);

export default router;