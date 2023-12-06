import administrador from "../models/Administrador.js";
import { validationResult } from 'express-validator';

class AdminController{
    static async criarAdmin (req, res) {
        if (!req.admin.isAdmin) {  // Verifica se o usuário autenticado é um administrador
            return res.status(403).json({ error: 'Somente administradores podem criar administradores' });
        }
        const erro = validationResult(req); // Validação dos dados do novo administrador usando express-validator
        if (!erro.isEmpty()) {
            return res.status(400).json({ errors: erro.array() });
        }
        const novoAdmin = req.body;
        try {
            let adminExistente = await administrador.findOne({ email: novoAdmin.email }); // Verifica se o usuário já existe
            if (adminExistente) {
            return res.status(400).json({ error: 'Usuário já existe' });
            }
            const adminCriado = await administrador.create(novoAdmin);
            res.status(201).json({ message: "Criado com sucesso!", administrador: adminCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar administrador`});
        }
    };

    static async deletaNaoAdmin (req, res) {
        if (!req.admin.isAdmin) {  // Verifica se o usuário autenticado é um administrador
            return res.status(403).json({ error: 'Somente administradores podem deletar usuários não adiministradores' });
        }
        try { // Encontra o usuário a ser excluído
            const adminParaDeletar = await administrador.findById(req.params.id);
            if (!adminParaDeletar) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            if (adminParaDeletar.isAdmin) {  // Verifica se o usuário a ser excluído não é um administrador
            return res.status(400).json({ error: 'Não é possível deletar um adiministrador' });
            }
            await adminParaDeletar.remove();  // Exclui o usuário não administrador do banco de dados
            res.status(204).json();
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar administrador`});
        }
    };
}

export default AdminController;