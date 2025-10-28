const { sql } = require('../db_Querys/db_config');

const createFilialQuery = async (filial) => {
  const request = new sql.Request();

  request.input('coligada_id', sql.VarChar, filial.coligada_id);
  request.input('codigo', sql.VarChar, filial.codigo);
  request.input('nome', sql.VarChar, filial.nome);
  request.input('razao_social', sql.VarChar, filial.razao_social);
  request.input('cnpj', sql.VarChar, filial.cnpj);
  request.input('inscricao_estadual', sql.VarChar, filial.inscricao_estadual);
  request.input('inscricao_municipal', sql.VarChar, filial.inscricao_municipal);
  request.input('matriz', sql.VarChar, filial.matriz);
  request.input('ativo', sql.Bit, filial.ativo);
  request.input('created_by', sql.Int, filial.created_by); 

  const query = `
    INSERT INTO Filial (coligada_id ,codigo, nome, razao_social, cnpj, inscricao_estadual, inscricao_municipal, matriz, ativo, created_by)
    VALUES (@coligada_id, @codigo, @nome, @razao_social, @cnpj, @inscricao_estadual, @inscricao_municipal, @matriz, @ativo, @created_by);
  `;
  await request.query(query);
  return { message: 'Filial cadastrada com sucesso!' };
};

module.exports = {
  createFilialQuery,
};
