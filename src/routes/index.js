import express from "express";
import Usuario from "./usuarioRoutes.js";
import Arma from "./armaRoutes.js";
import Habilidade from "./funcaoRoutes.js";
import Mapa from "./mapaRoutes.js";
import Personagem from "./personagemRoutes.js";

const routes = (app) =>{
    app.route("/").get((req,res) => res.status(200).send
    ("Projeto Back-end"));
    app.use(express.json(), Usuario, Arma, Habilidade, Mapa, Personagem);
};

export default routes;