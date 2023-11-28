import express from "express";
import armaController from '../controllers/armaController.js';
const { check } = require('express-validator');
const router = express.Router();

router.get('/', armaController.getArmas);
router.get('/:id', armaController.getArmaById);

router.post( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
    check('damage', 'Damage must be a valid number').isNumeric(),
    check('accuracy', 'Accuracy must be a valid number').isNumeric(),
  ],
  armaController.createArma
);

router.put( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
    check('damage', 'Damage must be a valid number').isNumeric(),
    check('accuracy', 'Accuracy must be a valid number').isNumeric(),
  ],
  armaController.updateArma
);

router.delete('/:id', armaController.deleteArma); // Rota deve estar protegida por autenticação e permitida apenas para administradores

module.exports = router;
