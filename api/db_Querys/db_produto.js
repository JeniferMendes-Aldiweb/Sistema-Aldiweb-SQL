const { sql } = require('../db_Querys/db_config');

const createProdutoQuery = async (produto) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, produto.codigo);
  request.input('nome', sql.NVarChar, produto.nome);
  request.input('descricao', sql.NVarChar, produto.descricao);
  request.input('categoria', sql.NVarChar, produto.categoria);
  request.input('unidade', sql.NVarChar, produto.unidade);
  request.input('valor_unitario', sql.NVarChar, produto.valor_unitario);
  request.input('estoque_minimo', sql.NVarChar, produto.estoque_minimo);
  request.input('estoque_atual', sql.NVarChar, produto.estoque_atual);
  request.input('ativo', sql.Bit, produto.ativo);
  request.input('created_by', sql.Int, produto.created_by); 

  const query = `
    INSERT INTO Produto (codigo, nome, descricao, categoria, unidade, valor_unitario, estoque_minimo, estoque_atual, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @categoria, @unidade, @valor_unitario, @estoque_minimo, @estoque_atual, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Produto cadastrado com sucesso!' };
};

module.exports = {
  createProdutoQuery,
};
