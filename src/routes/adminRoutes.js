import express from "express";
import AdminController from "../controllers/adminController.js";

const router = express.Router();

router.post("/administrador", AdminController.criarAdmin);
router.delete("/administrador/:id", AdminController.deletaNaoAdmin);


export default router;