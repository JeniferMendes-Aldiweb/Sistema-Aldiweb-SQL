// controllers/modulos.controller.js

const { createModuloQuery } = require('../db_Querys/db_modulo.js');

const createModulo = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoModulo = req.body;
    const result = await createModuloQuery(novoModulo);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar módulo:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createModulo,
};
