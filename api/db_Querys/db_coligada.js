const { sql } = require('../db_Querys/db_config');

const createColigadaQuery = async (coligada) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, coligada.codigo);
  request.input('nome', sql.VarChar, coligada.nome);
  request.input('razao_social', sql.VarChar, coligada.razao_social);
  request.input('cnpj', sql.VarChar, coligada.cnpj);
  request.input('inscricao_estadual', sql.VarChar, coligada.inscricao_estadual);
  request.input('inscricao_municipal', sql.VarChar, coligada.inscricao_municipal);
  request.input('ativo', sql.Bit, coligada.ativo);
  request.input('created_by', sql.Int, coligada.created_by); 

  const query = `
    INSERT INTO Coligada (codigo, nome, razao_social, cnpj, inscricao_estadual, inscricao_municipal, ativo, created_by)
    VALUES (@codigo, @nome, @razao_social, @cnpj, @inscricao_estadual, @inscricao_municipal, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Coligada cadastrada com sucesso!' };
};

module.exports = {
  createColigadaQuery,
};
