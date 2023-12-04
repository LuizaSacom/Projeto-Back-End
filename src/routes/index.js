import express from "express";
import personagem from "./personagemRoutes.js";
import funcao from "./funcaoRoutes.js";
import nacionalidade from "./nacionalidadeRoutes.js";
import arma from "./armaRoutes.js";
import mapa from "./mapaRoutes.js";


const routes = (app) =>{
    app.route("/").get((req,res) => res.status(200).send
    ("Projeto Back-end"));
    app.use(express.json(), personagem, funcao, nacionalidade, arma, mapa);
};

export default routes;