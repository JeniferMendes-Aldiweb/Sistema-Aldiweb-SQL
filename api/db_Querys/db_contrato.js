const { sql } = require('../db_Querys/db_config');

const createContratoQuery = async (contrato) => {
  const request = new sql.Request();

  request.input('numero', sql.VarChar, contrato.numero);
  request.input('proposta_id', sql.VarChar, contrato.proposta_id);
  request.input('data_assinatura', sql.VarChar, contrato.data_assinatura);
  request.input('data_inicio', sql.VarChar, contrato.data_inicio);
  request.input('data_fim', sql.VarChar, contrato.data_fim);
  request.input('titulo', sql.VarChar, contrato.titulo);
  request.input('descricao', sql.VarChar, contrato.descricao);
  request.input('valor_total', sql.VarChar, contrato.valor_total);
  request.input('condicoes_pagamento', sql.VarChar, contrato.condicoes_pagamento);
  request.input('clausulas', sql.VarChar, contrato.clausulas);
  request.input('observacoes', sql.VarChar, contrato.observacoes);
  request.input('arquivo_url', sql.VarChar, contrato.arquivo_url);
  request.input('status_id', sql.VarChar, contrato.status_id);
  request.input('responsavel_id', sql.VarChar, contrato.responsavel_id);
  request.input('versao', sql.VarChar, contrato.versao);
  request.input('contrato_anterior_id', sql.VarChar, contrato.contrato_anterior_id);
  request.input('ativo', sql.Bit, contrato.ativo);
  request.input('created_by', sql.Int, contrato.created_by); 

  const query = `  
    INSERT INTO Contrato (numero, proposta_id, data_assinatura, data_inicio, data_fim, titulo, descricao, valor_total, condicoes_pagamento, clausulas, observacoes, arquivo_url, status_id, responsavel_id, versao, contrato_anterior_id, ativo, created_by) 
    VALUES (@numero, @proposta_id, @data_assinatura, @data_inicio, @data_fim, @titulo, @descricao, @valor_total, @condicoes_pagamento, @clausulas, @observacoes, @arquivo_url, @status_id, @responsavel_id, @versao, @contrato_anterior_id, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Contrato cadastrado com sucesso!' };
};

module.exports = {
  createContratoQuery,
};
