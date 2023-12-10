const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Rota para registro de usuário
router.post('/registro', authController.registrarUsuario);

// Rota para login de usuário
router.post('/login', authController.fazerLogin);

// Rota de instalação para criar um usuário administrador inicial
router.post('/instalar', authController.instalarAdmin);

module.exports = router;