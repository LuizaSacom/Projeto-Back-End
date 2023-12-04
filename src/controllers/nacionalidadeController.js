import { nacionalidade } from "../models/Nacionalidade.js";

class NacionalidadeController{
    static async listarNacionalidades (req, res) { //asyns se conecta com o banco
        try{
            const listarNacionalidades = await nacionalidade.find({}); //vai encontrar todos pois não passou parametro
            res.status(200).json(listarNacionalidades);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }

  static async listarNacionalidadePorId (req, res) {
      try{
          const id = req.params.id;
          const nacionalidadeEncontrado = await nacionalidade.findById(id); //vai encontrar todos pois não passou parametro
          res.status(200).json(nacionalidadeEncontrado);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição do nacionalidade`});
      }
  };

  static async cadastrarNacionalidade (req, res) {
      try{
          const novoNacionalidade = await nacionalidade.create(req.body);   //passa a criar
          res.status(201).json({ message: "Criado com sucesso!", nacionalidade: novoNacionalidade });
      }catch (erro){
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar nacionalidade`});
      }
  };

  static async atualizarNacionalidade (req, res) {
      try{
          const id = req.params.id;
          await nacionalidade.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: "Nacionalidade atualizado!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na atualização do nacionalidade`});
      }
  };
  
  static async excluirNacionalidade (req, res) {
      try{
          const id = req.params.id;
          await nacionalidade.findByIdAndDelete(id);
          res.status(200).json({message: "Nacionalidade excluido!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na exclusão do nacionalidade`});
      }
  };
};

export default NacionalidadeController;