// controllers/pessoas.controller.js

// Não precisa mais do express-validator aqui
const { createPessoaQuery, findAllPessoasQuery } = require('../db_Querys/db_pessoa');

// Controlador para criar uma pessoa
const createPessoa = async (req, res) => {
  try {
    // A validação já aconteceu, então podemos usar os dados com segurança
    const novaPessoa = req.body;
    const result = await createPessoaQuery(novaPessoa);
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro no controller ao criar pessoa:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

// Controlador para listar todas as pessoas
const getAllPessoas = async (req, res) => {
  try {
    const pessoas = await findAllPessoasQuery();
    res.status(200).json(pessoas);
  } catch (error) {
    console.error('Erro no controller ao listar pessoas:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
};

module.exports = {
  createPessoa,
  getAllPessoas,
};
