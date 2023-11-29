import express from "express";
import Personagem from "./personagemRoutes.js";
import Funcao from "./funcaoRoutes.js";
import Nacionalidade from "./nacionalidadeRoutes.js";
import Arma from "./armaRoutes.js";
import Mapa from "./mapaRoutes.js";


const routes = (app) =>{
    app.route("/").get((req,res) => res.status(200).send
    ("Projeto Back-end"));
    app.use(express.json(), Personagem, Funcao, Nacionalidade, Arma, Mapa);
};

export default routes;