import express from "express";
import mapaController from '../controllers/mapaController.js';
const { check } = require('express-validator');
const router = express.Router();

router.get('/', mapaController.getMapas); // Rota deve estar protegida por autenticação
router.get('/:id', mapaController.getMapaById);

router.post( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
    check('size', 'Size is required').not().isEmpty(),
  ],
  mapaController.createMapa
);

router.put( // Rota deve estar protegida por autenticação e permitida apenas para administradores
  '/:id',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
    check('size', 'Size is required').not().isEmpty(),
  ],
  mapaController.updateMapa
);

router.delete('/:id', mapaController.deleteMapa); // Rotadeve estar protegida por autenticação e permitida apenas para administradores

module.exports = router;