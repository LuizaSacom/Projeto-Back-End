const Mapa = require('../models/Mapa.js');
const { validationResult } = require('express-validator');

exports.getMapas = async (req, res, next) => {  // Rota para listar todos os mapas com paginação
  try {
    const { page = 1, limit = 5 } = req.query;
    const mapas = await Mapa.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.status(200).json(mapas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getMapaById = async (req, res, next) => {  // Rota para obter informações de um mapa pelo ID
  try {
    const mapa = await Mapa.findById(req.params.id);
    if (!mapa) {
      return res.status(404).json({ error: 'Mapa não encontrado' });
    }
    res.status(200).json(mapa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.createMapa = async (req, res, next) => {  // Rota para cadastrar um novo mapa
  const errors = validationResult(req);  // Validação dos dados do mapa usando express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, location, size } = req.body;
  try {
    const mapa = new Mapa({  // Cria um novo mapa
      name,
      location,
      size,
    });

    await mapa.save();  // Salva o mapa no banco de dados
    res.status(201).json(mapa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updateMapa = async (req, res, next) => { // Rota para atualizar os dados de um mapa
  const { name, location, size } = req.body;
  try {  // Verifica se o mapa existe
    let mapa = await Mapa.findById(req.params.id);
    if (!mapa) {
      return res.status(404).json({ error: 'Mapa não encontrado' });
    }
    mapa.name = name || mapa.name;  // Atualiza os dados do mapa
    mapa.location = location || mapa.location;
    mapa.size = size || mapa.size;

    await mapa.save(); // Salva as alterações no banco de dados
    res.status(200).json(mapa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deleteMapa= async (req, res, next) => {  // Rota para excluir um mapa
  try {  // Verifica se o mapa existe
    const mapa = await Mapa.findById(req.params.id);
    if (!mapa) {
      return res.status(404).json({ error: 'Mapa não encontrado' });
    }

    await mapa.remove(); // Exclui o mapa do banco de dados
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};