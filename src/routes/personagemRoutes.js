import express from "express";
import personagemController from '../controllers/personagemController.js';
const { check } = require('express-validator');
const router = express.Router();

router.get('/', personagemController.getPersonagem); // Rota deve estar protegida por autenticação
router.get('/:id', personagemController.getPersonagemById);

router.post(  // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('role', 'Role is required').not().isEmpty(),
    check('arma', 'arma ID is required').isMongoId(),
  ],
  personagem.createPersonagem
);

router.put( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('role', 'Role is required').not().isEmpty(),
    check('arma', 'arma ID is required').isMongoId(),
  ],
  personagemController.updatePersonagem
);

router.delete('/:id', personagemController.deletePersonagem); // Rota deve estar protegida por autenticação e permitida apenas para administradores

module.exports = router;