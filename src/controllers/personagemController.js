const Personagem = require('../models/Personagem.js');
const { validationResult } = require('express-validator');

exports.getPersonagem = async (req, res, next) => {  // Rota para listar todos os personagens com paginação
  try {
    const { page = 1, limit = 5 } = req.query;
    const personagens = await Personagem.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(personagens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getPersonagemById = async (req, res, next) => { // Rota para obter informações de um personagem pelo ID
  try {
    const personagem = await Personagem.findById(req.params.id);
    if (!personagem) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    res.status(200).json(personagem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.createPersonagem = async (req, res, next) => { // Rota para cadastrar um novo personagem
  const errors = validationResult(req);  // Validação dos dados do personagem usando express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, role, arma } = req.body;
  try { // Cria um novo personagem
    const personagem = new Personagem({
      name,
      role,
      arma,
    });

    await personagem.save();  // Salva o personagem no banco de dados
    res.status(201).json(personagem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updatePersonagem = async (req, res, next) => { // Rota para atualizar os dados de um personagem
  const { name, role, arma } = req.body;
  try { // Verifica se o personagem existe
    let personagem = await Personagem.findById(req.params.id);
    if (!personagem) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    personagem.name = name || personagem.name;  // Atualiza os dados do personagem
    personagem.role = role || personagem.role;
    personagem.arma = arma || personagem.arma;

    await personagem.save(); // Salva as alterações no banco de dados
    res.status(200).json(personagem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deletePersonagem = async (req, res, next) => {  // Rota para excluir um personagem
  try { // Verifica se o personagem existe
    const personagem = await Personagem.findById(req.params.id);
    if (!personagem) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }

    await personagem.remove(); // Exclui o personagem do banco de dados
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};