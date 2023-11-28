import mongoose from "mongoose";

async function conectaNaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING); //lembrar de trocar 'livraria'
    return mongoose.connection;
};

export default conectaNaDataBase;