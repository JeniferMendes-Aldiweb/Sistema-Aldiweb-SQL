const { sql } = require('../db_Querys/db_config');

const createColigadaQuery = async (coligada) => {
  const request = new sql.Request();

  // Adiciona os parâmetros com base nos seus campos
  request.input('codigo', sql.VarChar, coligada.codigo);
  request.input('nome', sql.NVarChar, coligada.nome);
  request.input('razao_social', sql.NVarChar, coligada.razao_social);
  request.input('cnpj', sql.NVarChar, coligada.cnpj);
  request.input('inscricao_estadual', sql.NVarChar, coligada.inscricao_estadual);
  request.input('inscricao_municipal', sql.VarChar, coligada.inscricao_municipal);
  request.input('ativo', sql.Bit, coligada.ativo);
  // created_at e updated_at geralmente são gerenciados pelo banco (com DEFAULT GETDATE())
  // created_by e updated_by viriam do usuário logado
  request.input('created_by', sql.Int, coligada.created_by); 

  // Adapte o SQL para sua tabela e colunas
  const query = `
    INSERT INTO Coligada (codigo, nome, razao_social, cnpj, inscricao_estadual, inscricao_municipal, ativo, created_by)
    VALUES (@codigo, @nome, @razao_social, @cnpj, @inscricao_estadual, @inscricao_municipal, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Coligada cadastrado com sucesso!' };
};



module.exports = {
  createColigadaQuery,
};
