const { sql } = require('../db_Querys/db_config');

const createPermissaoQuery = async (permissao) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, permissao.codigo);
  request.input('nome', sql.VarChar, permissao.nome);
  request.input('descricao', sql.VarChar, permissao.descricao);
  request.input('modulo_id', sql.VarChar, permissao.modulo_id);
  request.input('recurso', sql.VarChar, permissao.recurso);
  request.input('acao', sql.VarChar, permissao.acao);
  request.input('ativo', sql.Bit, permissao.ativo);
  request.input('created_by', sql.Int, permissao.created_by); 

  const query = `
    INSERT INTO Permissao (codigo, nome, descricao, modulo_id, recurso, acao, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @modulo_id, @recurso, @acao, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Permissão cadastrada com sucesso!' };
};

module.exports = {
  createPermissaoQuery,
};
