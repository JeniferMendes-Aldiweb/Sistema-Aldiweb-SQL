const { createOrcamentoQuery } = require('../db_Querys/db_orcamento.js');

const createOrcamento = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoOrcamento = req.body;
    const result = await createOrcamentoQuery(novoOrcamento);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar Orçamento:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createOrcamento,
};
