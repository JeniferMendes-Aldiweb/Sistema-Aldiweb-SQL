const { createProdutoQuery } = require('../db_Querys/db_produto.js');

const createProduto = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoProduto = req.body;
    const result = await createProdutoQuery(novoProduto);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar Produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createProduto,
};
