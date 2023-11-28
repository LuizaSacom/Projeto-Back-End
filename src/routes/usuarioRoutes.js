import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/Usuario", UsuarioController.listarUsuarios);
router.get("/Usuario/:id", UsuarioController.listarUsuarioPorId);
router.post("/Usuario", UsuarioController.cadastrarUsuario);
router.put("/Usuario/:id", UsuarioController.atualizarUsuario);
router.delete("/Usuario/:id", UsuarioController.excluirUsuario);

export default router;