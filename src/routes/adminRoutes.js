import express from "express";
import AdminController from "../controllers/adminController.js";

const router = express.Router();

/*
router.post(  // Rota permitida apenas para administradores, mas ainda todos conseguem acessar
  '/create-admin',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Valid email is required').isEmail(),
  ],
  adminController.createAdmin
);

router.delete( // Rota permitida apenas para administradores, mas ainda todos conseguem acessar
  '/delete-user/:id',
  adminController.deleteNonAdminUser
); */

module.exports = router;