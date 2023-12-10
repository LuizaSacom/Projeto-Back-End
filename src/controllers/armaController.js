import Arma from "../models/Arma.js";

class ArmaController{
  static async listarArmas (req, res) { //asyns se conecta com o banco //getArmas
    try{
      const { page = 1, limit = 5 } = req.query;
      const armas = await Arma.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
      res.status(200).json(armas);
    } catch (error) {
      console.error(error);
      res.status(500).json({message: `${error.message} - falha na requisição`});
    }
  };
    
  static async listarArmaPorId (req, res) { //getArmaById
    try{
        const id = req.params.id;
        const armaEncontrado = await Arma.findById(id); //vai encontrar todos pois não passou parametro
        res.status(200).json(armaEncontrado);
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na requisição da arma`});
    }
  };

  static async cadastrarArma (req, res) { //createArma
    try{
        const novaArma = await Arma.create(req.body);   //passa a criar
        res.status(201).json({ message: "Criado com sucesso!", arma: novaArma });
    }catch (erro){
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar arma`});
    }
  };

  static async atualizarArma (req, res) { //updateArma
    try{
        const id = req.params.id;
        await Arma.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Arma atualizada!"});
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na atualização da arma`});
    }
  };
  static async excluirArma (req, res) {
    try{
        const id = req.params.id;
        await Arma.findByIdAndDelete(id);
        res.status(200).json({message: "Arma excluida!"});
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na exclusão da arma`});
    }
  };
}
export default ArmaController;