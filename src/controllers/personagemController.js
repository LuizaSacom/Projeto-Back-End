import { Personagem } from "../models/Personagem.js";

class PersonagemController { //classe
  static async listarPersonagens (req, res) { //asyns se conecta com o banco
      try{
        const { page = 1, limit = 5 } = req.query;
        const personagens = await Personagem.find()
          .skip((page - 1) * limit)
          .limit(parseInt(limit));
        res.status(200).json(personagens);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição`});
      }
  };

  static async listarPersonagemPorId (req, res) {
      try{
          const id = req.params.id;
          const personagemEncontrado = await Personagem.findById(id); //vai encontrar todos pois não passou parametro
          res.status(200).json(personagemEncontrado);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição do personagem`});
      }
  };

  static async cadastrarPersonagem (req, res) {
      try{
          const novoPersonagem = await Personagem.create(req.body);   //passa a criar
          res.status(201).json({ message: "Criado com sucesso!", personagem: novoPersonagem });
      }catch (erro){
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar personagem`});
      }
  };
  static async atualizarPersonagem (req, res) {
      try{
          const id = req.params.id;
          await Personagem.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: "Personagem atualizado!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na atualização do personagem`});
      }
  };
  static async excluirPersonagem (req, res) {
      try{
          const id = req.params.id;
          await Personagem.findByIdAndDelete(id);
          res.status(200).json({message: "Personagem excluido!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na exclusão do personagem`});
      }
  };
};

export default PersonagemController;