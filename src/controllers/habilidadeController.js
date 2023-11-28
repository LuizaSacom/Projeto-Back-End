const Habilidade = require('../models/Habilidade.js');
const { validationResult } = require('express-validator');

exports.getHabilidades = async (req, res, next) => {  // Rota para listar todas as habilidades com paginação
  try {
    const { page = 1, limit = 5 } = req.query;
    const habilidades = await Habilidade.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(habilidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getHabilidadeById = async (req, res, next) => {  // Rota para obter informações de uma habilidade pelo ID
  try {
    const habilidade = await Habilidade.findById(req.params.id);
    if (!habilidade) {
      return res.status(404).json({ error: 'Habilidade não encontrada' });
    }
    res.status(200).json(habilidade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.createHabilidade = async (req, res, next) => {  // Rota para cadastrar uma nova habilidade
  const errors = validationResult(req);  // Validação dos dados da habilidade usando express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, description, damage } = req.body;
  try {  // Cria uma nova habilidade
    const habilidade = new Habilidade({
      name,
      description,
      damage,
    });

    await habilidade.save();  // Salva a habilidade no banco de dados
    res.status(201).json(habilidade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updateHabilidade = async (req, res, next) => {  // Rota para atualizar os dados de uma habilidade
  const { name, description, damage } = req.body;
  try {  // Verifica se a habilidade existe
    let habilidade = await Habilidade.findById(req.params.id);
    if (!habilidade) {
      return res.status(404).json({ error: 'Habilidade não encontrada' });
    }
    habilidade.name = name || habilidade.name;  // Atualiza os dados da habilidade
    habilidade.description = description || habilidade.description;
    habilidade.damage = damage || habilidade.damage;

    await habilidade.save();  // Salva as alterações no banco de dados
    res.status(200).json(habilidade);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deleteHabilidade = async (req, res, next) => {  // Rota para excluir uma habilidade
  try {  // Verifica se a habilidade existe
    const habilidade = await Habilidade.findById(req.params.id);
    if (!habilidade) {
      return res.status(404).json({ error: 'Habilidade não encontrada' });
    }

    await habilidade.remove(); // Exclui a habilidade do banco de dados
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};