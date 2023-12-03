import Personagem from "../models/Personagem.js";
import { Funcao } from "../models/Funcao.js";
import { Nacionalidade } from "../models/Nacionalidade.js";

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

  static async cadastrarPersonagem (req, res) { /************************************* */
      const novoPersonagem = req.body;

      try{
          const funcaoEncontrada = await Funcao.findById(novoPersonagem.Funcao);
          const nacionalidadeEncontrado = await Nacionalidade.findById(novoPersonagem.Nacionalidade);
          const personagemCompleto = { ...novoPersonagem, funcao: { ...funcaoEncontrada._doc}, nacionalidade: { ...nacionalidadeEncontrado._doc }};
          const personagemCriado = await Personagem.create(personagemCompleto);
          res.status(201).json({ message: "Criado com sucesso!", personagem: personagemCriado });
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
  static async listarPersonagensPorFuncao (req, res){ //função de busca por parâmetro
    const Funcao = req.query.funcao;
    try{
        const personagensPorFuncao = await Personagem.find({ funcao: Funcao});
        res.status(200).jason(personagensPorFuncao);
    }catch(erro){
        res.status(500).json({ message: `${erro.message} - falha na busca `});
    }
  };
};

export default PersonagemController;