const { sql } = require('../db_Querys/db_config');

const createOrganizacaoQuery = async (organizacao) => {
  const request = new sql.Request();

  request.input('tipo', sql.VarChar, organizacao.tipo);
  request.input('codigo', sql.VarChar, organizacao.codigo);
  request.input('nome_fantasia', sql.VarChar, organizacao.nome_fantasia);
  request.input('razao_social', sql.VarChar, organizacao.razao_social);
  request.input('cnpj_cpf', sql.VarChar, organizacao.cnpj_cpf);
  request.input('inscricao_estadual', sql.VarChar, organizacao.inscricao_estadual);
  request.input('inscricao_municipal', sql.VarChar, organizacao.inscricao_municipal);
  request.input('email', sql.VarChar, organizacao.email);
  request.input('telefone', sql.VarChar, organizacao.telefone);
  request.input('site', sql.VarChar, organizacao.site);
  request.input('observacoes', sql.VarChar, organizacao.observacoes);
  request.input('coligada_id', sql.VarChar, organizacao.coligada_id);
  request.input('filial_id', sql.VarChar, organizacao.filial_id);
  request.input('ativo', sql.Bit, organizacao.ativo);
  request.input('created_by', sql.Int, organizacao.created_by); 

  const query = `
    INSERT INTO Organizacao (tipo, codigo, nome_fantasia, razao_social, cnpj_cpf, inscricao_estadual, inscricao_municipal, email, telefone, site, observacoes, coligada_id, filial_id, ativo, created_by)
    VALUES (@tipo, @codigo, @nome_fantasia, @razao_social, @cnpj_cpf, @inscricao_estadual, @inscricao_municipal, @email, @telefone, @site, @observacoes, @coligada_id, @filial_id, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Orgaznização cadastrada com sucesso!' };
};

module.exports = {
  createOrganizacaoQuery,
};
