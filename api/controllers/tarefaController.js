const { createTarefaQuery } = require('../db_Querys/db_tarefa.js');

const createTarefa = async (req, res) => {
  try {
    // Para created_by, você pegaria o ID do usuário logado a partir do token JWT, por exemplo.
    // Por enquanto, vamos simular que ele vem no corpo da requisição.
    const novoTarefa = req.body;
    const result = await createTarefaQuery(novoTarefa);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar Tarefa:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createTarefa,
};
