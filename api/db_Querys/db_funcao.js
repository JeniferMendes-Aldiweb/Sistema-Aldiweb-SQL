const { sql } = require('../db_Querys/db_config');

const createFuncaoQuery = async (funcao) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, funcao.codigo);
  request.input('nome', sql.VarChar, funcao.nome);
  request.input('descricao', sql.VarChar, funcao.descricao);
  request.input('nivel', sql.VarChar, funcao.nivel);
  request.input('ativo', sql.Bit, funcao.ativo);
  request.input('created_by', sql.Int, funcao.created_by); 

  const query = `
    INSERT INTO Funcao (codigo, nome, descricao, nivel, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @nivel, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Função cadastrada com sucesso!' };
};

module.exports = {
  createFuncaoQuery,
};
