// db_Querys/pessoas.query.js

const { sql } = require('../db_Querys/db_config'); // Importa a instância do mssql já conectada

const createPessoaQuery = async (pessoa) => {
  // O pool já está conectado. Apenas pegamos uma requisição.
  const request = new sql.Request();

  // Adiciona os parâmetros
  request.input('Nome', sql.NVarChar, pessoa.nome);
  request.input('Email', sql.NVarChar, pessoa.email);
  request.input('DataNascimento', sql.Date, pessoa.dataNascimento ? new Date(pessoa.dataNascimento) : null);

  // Executa a query
  await request.query('INSERT INTO Pessoa (Nome, Email, DataNascimento) VALUES (@Nome, @Email, @DataNascimento)');
  
  return { message: 'Pessoa cadastrada com sucesso!' };
};

const findAllPessoaQuery = async () => {
  const request = new sql.Request();
  const result = await request.query('SELECT * FROM Pessoa ORDER BY Nome');
  
  // O resultado já vem em um formato fácil de usar (result.recordset)
  return result.recordset;
};

module.exports = {
  createPessoaQuery,
  findAllPessoaQuery,
};
