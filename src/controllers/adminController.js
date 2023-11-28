import Usuario from "../models/Usuarios.js";

class AdminController {
  static async listarAdmin (req, res) { //asyns se conecta com o banco
    try{
        const listaAdmin = await admin.find({}); //vai encontrar todos pois não passou parametro
        res.status(200).json(listaAdmin);
    }catch (erro){
        res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  }

  
}
export default AdminController;

/*
exports.createAdmin = async (req, res, next) => {  // Rota para criar um novo administrador
  if (!req.usuario.isAdmin) {  // Verifica se o usuário autenticado é um administrador
    return res.status(403).json({ error: 'Somente administradores podem criar administradores' });
  }
  const errors = validationResult(req); // Validação dos dados do novo administrador usando express-validator
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email }); // Verifica se o usuário já existe
    if (usuario) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }
    usuario = new Usuario({  // Cria um novo administrador
      name,
      email,
      password: hashedPassword,
      isAdmin: true,
    });
    await usuario.save(); // Salva o administrador no banco de dados
    res.status(200).json({message: "Administrador criado!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};


exports.deleteNonAdminUsuario = async (req, res, next) => {  // Rota para excluir um usuário não administrador
  if (!req.usuario.isAdmin) {  // Verifica se o usuário autenticado é um administrador
    return res.status(403).json({ error: 'Somente administradores podem deletar usuários não adiministradores' });
  }
  try { // Encontra o usuário a ser excluído
    const usuarioToDelete = await Usuario.findById(req.params.id);
    if (!usuarioToDelete) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    if (usuarioToDelete.isAdmin) {  // Verifica se o usuário a ser excluído não é um administrador
      return res.status(400).json({ error: 'Não é possível deletar um adiministrador' });
    }
    await usuarioToDelete.remove();  // Exclui o usuário não administrador do banco de dados
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servior' });
  }
}; */