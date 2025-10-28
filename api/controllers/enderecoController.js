const { createEnderecoQuery } = require('../db_Querys/db_endereco.js');

const createEndereco = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoEndereco = req.body;
    const result = await createEnderecoQuery(novoEndereco);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar Endereço:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createEndereco,
};
