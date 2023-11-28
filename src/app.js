import express from "express";                                     //o mongo é o nosso banco e o mongoose é a biblioteca que está fazendo essa interface entre o mongo e a API.
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão feita com sucesso!");
})

const app = express();
routes(app);

export default app;