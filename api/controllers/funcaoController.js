const { createFuncaoQuery } = require('../db_Querys/db_funcao.js');

const createFuncao = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoFuncao = req.body;
    const result = await createFuncaoQuery(novoFuncao);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar Função:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createFuncao,
};
