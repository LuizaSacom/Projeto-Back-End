import { funcao } from "../models/Funcao.js";

class FuncaoController{
  static async listarFuncoes (req, res) { //asyns se conecta com o banco
      try{
          const listarFuncoes = await funcao.find({}); //vai encontrar todos pois não passou parametro
          res.status(200).json(listarFuncoes);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição`});
      }
  }

  static async listarFuncaoPorId (req, res) {
    try{
        const id = req.params.id;
        const funcaoEncontrado = await funcao.findById(id); //vai encontrar todos pois não passou parametro
        res.status(200).json(funcaoEncontrado);
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na requisição da funcao`});
    }
  };

  static async cadastrarFuncao (req, res) { 
    try{
        const novaFuncao = await funcao.create(req.body);   //passa a criar
        res.status(201).json({ message: "Criado com sucesso!", funcao: novaFuncao });
    }catch (erro){
        res.status(500).json({ message: `${erro.message} - falha ao cadastrar funcao`});
    }
  }

  static async atualizarFuncao (req, res) {
    try{
        const id = req.params.id;
        await funcao.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Funcao atualizada!"});
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na atualização da funcao`});
    }
  };

  static async excluirFuncao (req, res) {
    try{
        const id = req.params.id;
        await funcao.findByIdAndDelete(id);
        res.status(200).json({message: "Funcao excluida!"});
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na exclusão da funcao`});
    }
  };
};

export default FuncaoController;