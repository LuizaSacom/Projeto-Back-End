import express from "express";
import FuncaoController from "../controllers/funcaoController.js";

const router = express.Router();

router.get("/Funcao", FuncaoController.listarFuncoes);
router.get("/Funcao/:id", FuncaoController.listarFuncaoPorId);
router.post("/Funcao", FuncaoController.cadastrarFuncao);
router.put("/Funcao/:id", FuncaoController.atualizarFuncao);
router.delete("/Funcao/:id", FuncaoController.excluirFuncao);

export default router;
