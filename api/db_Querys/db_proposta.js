const { sql } = require('../db_Querys/db_config');

const createPropostaQuery = async (proposta) => {
  const request = new sql.Request();

  request.input('numero', sql.VarChar, proposta.numero);
  request.input('orcamento_id', sql.VarChar, proposta.orcamento_id);
  request.input('data_emissao', sql.VarChar, proposta.data_emissao);
  request.input('data_validade', sql.VarChar, proposta.data_validade);
  request.input('titulo', sql.VarChar, proposta.titulo);
  request.input('descricao', sql.VarChar, proposta.descricao);
  request.input('valor_total', sql.VarChar, proposta.valor_total);
  request.input('condicoes_pagamento', sql.VarChar, proposta.condicoes_pagamento);
  request.input('prazo_entrega', sql.VarChar, proposta.prazo_entrega);
  request.input('observacoes', sql.VarChar, proposta.observacoes);
  request.input('status_id', sql.VarChar, proposta.status_id);
  request.input('responsavel_id', sql.VarChar, proposta.responsavel_id);
  request.input('aprovada_em', sql.VarChar, proposta.aprovada_em);
  request.input('aprovada_por', sql.VarChar, proposta.aprovada_por);
  request.input('ativo', sql.Bit, proposta.ativo);
  request.input('created_by', sql.Int, proposta.created_by); 

  const query = `
    INSERT INTO Proposta (numero, orcamento_id, data_emissao, data_validade, titulo, descricao, valor_total, condicoes_pagamento, prazo_entrega, observacoes, status_id, responsavel_id, aprovada_em, aprovada_por, ativo, created_by) 
    VALUES (@numero, @orcamento_id, @data_emissao, @data_validade, @titulo, @descricao, @valor_total, @condicoes_pagamento, @prazo_entrega, @observacoes, @status_id, @responsavel_id, @aprovada_em, @aprovada_por, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Proposta cadastrada com sucesso!' };
};

module.exports = {
  createPropostaQuery,
};
