const Arma = require('../models/Arma.js');
const { validationResult } = require('express-validator');

exports.getArmas = async (req, res, next) => {  // Rota para listar todas as armas com paginação
  try {
    const { page = 1, limit = 5 } = req.query;
    const armas = await Arma.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(armas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getArmaById = async (req, res, next) => {  // Rota para obter informações de uma arma pelo ID
  try {
    const arma = await Arma.findById(req.params.id);
    if (!arma) {
      return res.status(404).json({ error: 'Arma não encontrada' });
    }
    res.status(200).json(arma);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.createArma = async (req, res, next) => {  // Rota para cadastrar uma nova arma
  const errors = validationResult(req);  // Validação dos dados da arma usando express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, type, damage, accuracy } = req.body;
  try {
    const arma = new Arma({  // Cria uma nova arma
      name,
      type,
      damage,
      accuracy,
    });
    await arma.save();  // Salva a arma no banco de dados
    res.status(201).json(arma);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updateArma = async (req, res, next) => {  // Rota para atualizar os dados de uma arma
  const { name, type, damage, accuracy } = req.body;
  try {  // Verifica se a arma existe
    let arma = await Arma.findById(req.params.id);
    if (!arma) {
      return res.status(404).json({ error: 'Arma não encontrada' });
    }
    arma.name = name || arma.name;  // Atualiza os dados da arma
    arma.type = type || arma.type;
    arma.damage = damage || arma.damage;
    arma.accuracy = accuracy || arma.accuracy;
    
    await arma.save(); // Salva as alterações no banco de dados
    res.status(200).json(arma);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deleteArma = async (req, res, next) => { // Rota para excluir uma arma
  try {  // Verifica se a arma existe
    const arma = await Arma.findById(req.params.id);
    if (!arma) {
      return res.status(404).json({ error: 'Arma não encontrada' });
    }

    await arma.remove(); // Exclui a arma do banco de dados

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
