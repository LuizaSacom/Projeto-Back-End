import express from "express";
import FuncaoController from "../controllers/funcaoController.js";

const router = express.Router();

router.get("/funcao", FuncaoController.listarFuncoes);
router.get("/funcao/:id", FuncaoController.listarFuncaoPorId);
router.post("/funcao", FuncaoController.cadastrarFuncao);
router.put("/funcao/:id", FuncaoController.atualizarFuncao);
router.delete("/funcao/:id", FuncaoController.excluirFuncao);

export default router;
