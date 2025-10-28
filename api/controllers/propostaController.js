const { createPropostaQuery } = require('../db_Querys/db_proposta.js');

const createProposta = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoProposta = req.body;
    const result = await createPropostaQuery(novoProposta);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar proposta:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createProposta,
};
