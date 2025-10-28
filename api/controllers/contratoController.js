const { createContratoQuery } = require('../db_Querys/db_contrato.js');

const createContrato = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoContrato = req.body;
    const result = await createContratoQuery(novoContrato);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar Contrato:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createContrato,
};
