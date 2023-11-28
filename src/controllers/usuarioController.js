import Usuario from "../models/Usuario.js";

class UsuarioController { //classe
  static async listarUsuarios (req, res) { //asyns se conecta com o banco
      try{
        const { page = 1, limit = 5 } = req.query;
        const usuarios = await Usuario.find()
          .skip((page - 1) * limit)
          .limit(parseInt(limit));
        res.status(200).json(usuarios);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição`});
      }
  };

  static async listarUsuarioPorId (req, res) {
      try{
          const id = req.params.id;
          const usuarioEncontrado = await Usuario.findById(id); //vai encontrar todos pois não passou parametro
          res.status(200).json(usuarioEncontrado);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição do usuario`});
      }
  };

  static async cadastrarUsuario (req, res) {
      try{
          const novoUsuario = await Usuario.create(req.body);   //passa a criar
          res.status(201).json({ message: "Criado com sucesso!", usuario: novoUsuario });
      }catch (erro){
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario`});
      }
  };

  static async atualizarUsuario (req, res) {
      try{
          const id = req.params.id;
          await Usuario.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: "Usuario atualizado!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na atualização do usuario`});
      }
  };

  static async excluirUsuario (req, res) {
      try{
          const id = req.params.id;
          await Usuario.findByIdAndDelete(id);
          res.status(200).json({message: "Usuario excluido!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na exclusão do usuario`});
      }
  };
};

export default UsuarioController;