import express from "express";
import conectaNaDataBase from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_doc.json' assert { type: 'json' };

const app = express();

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão feita com sucesso!");
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

routes(app);

export default app;
