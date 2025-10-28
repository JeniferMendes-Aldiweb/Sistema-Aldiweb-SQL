const { createContatoQuery } = require('../db_Querys/db_contato.js');

const createContato = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoContato = req.body;
    const result = await createContatoQuery(novoContato);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar a Organização:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createContato,
};
