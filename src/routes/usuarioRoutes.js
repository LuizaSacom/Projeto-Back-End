import express from "express";
import usuarioController from '../controllers/usuarioController.js';
const router = express.Router();

// Rotas que devem ser públicas públicas
router.post('/register', usuarioController.registerUsuario);
router.post('/login', usuarioController.loginUsuario);

// Rotas que precisam ser protegidas por autenticação
router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;