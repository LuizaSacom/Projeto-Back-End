const Usuario = require('../models/Usuario.js');
const { validationResult } = require('express-validator');

exports.getUsuarios = async (req, res, next) => { // Rota para listar todos os usuários com paginação
  try {
    const { page = 1, limit = 5 } = req.query;
    const usuarios = await Usuario.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getUsuarioById = async (req, res, next) => { // Rota para obter informações de um usuário pelo ID
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.registerUsuario = async (req, res, next) => { // Rota para registrar um novo usuário
  const errors = validationResult(req); // Validação dos dados do usuário usando express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  try { // Verifica se o usuário já existe
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }
    usuario = new Usuario({ // Cria um novo usuário
      name,
      email,
      password: hashedPassword,
    });

    await usuario.save(); // Salva o usuário no banco de dados
    res.status(200).json({message: "Usuário criado!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updateUsuario = async (req, res, next) => { // Rota para atualizar os dados de um usuário
  const { name, email } = req.body;
  try { // Verifica se o usuário existe
    let usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    usuario.name = name || usuario.name;  // Atualiza os dados do usuário
    usuario.email = email || usuario.email;

    await usuario.save(); // Salva as alterações no banco de dados
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deleteUsuario = async (req, res, next) => {  // Rota para excluir um usuário
  try { // Verifica se o usuário existe
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    await usuario.remove(); // Exclui o usuário do banco de dados
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};