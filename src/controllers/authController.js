const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const gerarToken = (userId, isAdmin) => {
  const payload = { userId, isAdmin };
  return jwt.sign(payload, 'sua_chave_secreta', { expiresIn: '1h' });
};

// Função para registrar um novo usuário
const registrarUsuario = async (req, res) => {
  try {
    const { nome, senha } = req.body;

    // Verificar se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ nome });

    if (usuarioExistente) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Criptografar a senha antes de salvar no banco de dados
    const hashedSenha = await bcrypt.hash(senha, 10);

    // Criar um novo usuário
    const novoUsuario = new Usuario({
      nome,
      senha: hashedSenha,
    });

    // Salvar o novo usuário no banco de dados
    await novoUsuario.save();

    // Gerar um token JWT para o novo usuário
    const token = gerarToken(novoUsuario._id, novoUsuario.isAdmin);

    // Enviar o token como resposta
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};

// Função para realizar o login de um usuário
const fazerLogin = async (req, res) => {
  try {
    const { nome, senha } = req.body;

    // Procurar o usuário no banco de dados
    const usuario = await Usuario.findOne({ nome });

    // Verificar se o usuário existe
    if (!usuario) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verificar se a senha é válida
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar um token JWT para o usuário autenticado
    const token = gerarToken(usuario._id, usuario.isAdmin);

    // Enviar o token como resposta
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

// Função para instalar um usuário administrador inicial
const instalarAdmin = async (req, res) => {
  try {
    // Verificar se já existe um usuário administrador
    const adminExistente = await Usuario.findOne({ isAdmin: true });

    if (adminExistente) {
      return res.status(400).json({ message: 'Já existe um usuário administrador' });
    }

    // Criptografar a senha do admin antes de salvar no banco de dados
    const senhaAdmin = 'senhaAdmin'; // Defina a senha desejada para o administrador
    const hashedSenhaAdmin = await bcrypt.hash(senhaAdmin, 10);

    // Criar e salvar o usuário administrador
    const novoAdmin = new Usuario({
      nome: 'admin',
      senha: hashedSenhaAdmin,
      isAdmin: true,
    });

    await novoAdmin.save();

    // Gerar um token JWT para o novo administrador
    const token = gerarToken(novoAdmin._id, novoAdmin.isAdmin);

    res.status(201).json({ message: 'Usuário administrador instalado com sucesso', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao instalar usuário administrador' });
  }
};

module.exports = { registrarUsuario, fazerLogin, instalarAdmin };