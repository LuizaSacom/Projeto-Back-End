import { Habilidade } from "../models/Habilidade.js";

class HabilidadeController{
  static async listarHabilidades (req, res) { //asyns se conecta com o banco //getHabilidades
    try{
      const { page = 1, limit = 5 } = req.query;
      const habilidades = await Habilidade.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
      res.status(200).json(habilidades);
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  };

  static async listarHabilidadePorId (req, res) {
    try{
        const id = req.params.id;
        const habilidadeEncontrado = await habilidade.findById(id); //vai encontrar todos pois não passou parametro
        res.status(200).json(habilidadeEncontrado);
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na requisição da habilidade`});
    }
  };

  static async cadastrarHabilidade (req, res) { //createHabilidade
    try{
        const novaHabilidade = await habilidade.create(req.body);   //passa a criar
        res.status(201).json({ message: "Criado com sucesso!", habilidade: novaHabilidade });
    }catch (erro){
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar habilidade`});
    }
  }

  static async atualizarHabilidade (req, res) {
    try{
        const id = req.params.id;
        await Habilidade.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Habilidade atualizada!"});
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na atualização da habilidade`});
    }
  };

  static async excluirHabilidade (req, res) {
    try{
        const id = req.params.id;
        await Habilidade.findByIdAndDelete(id);
        res.status(200).json({message: "Habilidade excluida!"});
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na exclusão da habilidade`});
    }
  };
};

export default HabilidadeController;