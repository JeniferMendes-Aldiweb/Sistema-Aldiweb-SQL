const { sql } = require('../db_Querys/db_config');

const createOrcamentoQuery = async (orcamento) => {
  const request = new sql.Request();

  request.input('numero', sql.VarChar, orcamento.numero);
  request.input('organizacao_id', sql.VarChar, orcamento.organizacao_id);
  request.input('contato_id', sql.VarChar, orcamento.contato_id);
  request.input('data_emissao', sql.VarChar, orcamento.data_emissao);
  request.input('data_validade', sql.VarChar, orcamento.data_validade);
  request.input('titulo', sql.VarChar, orcamento.titulo);
  request.input('descricao', sql.VarChar, orcamento.descricao);
  request.input('valor_subtotal', sql.VarChar, orcamento.valor_subtotal);
  request.input('valor_desconto', sql.VarChar, orcamento.valor_desconto);
  request.input('percentual_desconto', sql.VarChar, orcamento.percentual_desconto);
  request.input('valor_total', sql.VarChar, orcamento.valor_total);
  request.input('observacoes', sql.VarChar, orcamento.observacoes);
  request.input('status_id', sql.VarChar, orcamento.status_id);
  request.input('coligada_id', sql.VarChar, orcamento.coligada_id);
  request.input('filial_id', sql.VarChar, orcamento.filial_id);
  request.input('responsavel_id', sql.VarChar, orcamento.responsavel_id);
  request.input('ativo', sql.Bit, orcamento.ativo);
  request.input('created_by', sql.Int, orcamento.created_by); 

  const query = `
    INSERT INTO Orcamento (numero, organizacao_id, contato_id, data_emissao, data_validade, titulo, descricao, valor_subtotal, valor_desconto, percentual_desconto, valor_total, observacoes, status_id, coligada_id, filial_id, responsavel_id, ativo, created_by) 
    VALUES (@numero, @organizacao_id, @contato_id, @data_emissao, @data_validade, @titulo, @descricao, @valor_subtotal, @valor_desconto, @percentual_desconto, @valor_total, @observacoes, @status_id, @coligada_id, @filial_id, @responsavel_id, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Orçamento cadastrado com sucesso!' };
};

module.exports = {
  createOrcamentoQuery,
};
