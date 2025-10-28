const { sql } = require('../db_Querys/db_config');

const createModuloQuery = async (modulo) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, modulo.codigo);
  request.input('nome', sql.VarChar, modulo.nome);
  request.input('descricao', sql.VarChar, modulo.descricao);
  request.input('icone', sql.VarChar, modulo.icone);
  request.input('ordem', sql.Int, modulo.ordem);
  request.input('ativo', sql.Bit, modulo.ativo);
  request.input('created_by', sql.Int, modulo.created_by); 

  const query = `
    INSERT INTO Modulo (codigo, nome, descricao, icone, ordem, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @icone, @ordem, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Módulo cadastrado com sucesso!' };
};


module.exports = {
  createModuloQuery,
};
