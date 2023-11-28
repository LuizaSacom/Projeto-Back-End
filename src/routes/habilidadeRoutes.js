import express from "express";
import habilidadeController from '../controllers/habilidadeController.js';
const { check } = require('express-validator');
const router = express.Router();

router.get('/', habilidadeController.getHabilidades); // Rota deve estar protegida por autenticação
router.get('/:id', habilidadeController.getHabilidadeById);

router.post( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('damage', 'Damage must be a valid number').isNumeric(),
  ],
  habilidadeController.createHabilidade
);

router.put( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('damage', 'Damage must be a valid number').isNumeric(),
  ],
  habilidadeController.updateHabilidade
);

router.delete('/:id', habilidadeController.deleteHabilidade); // Rota deve estar protegida por autenticação e permitida apenas para administradores

module.exports = router;
