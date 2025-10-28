const { sql } = require('../db_Querys/db_config');

const createProjetoQuery = async (projeto) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, projeto.codigo);
  request.input('nome', sql.VarChar, projeto.nome);
  request.input('descricao', sql.VarChar, projeto.descricao);
  request.input('organizacao_id', sql.VarChar, projeto.organizacao_id);
  request.input('contrato_id', sql.VarChar, projeto.contrato_id);
  request.input('data_inicio', sql.VarChar, projeto.data_inicio);
  request.input('data_fim_prevista', sql.VarChar, projeto.data_fim_prevista);
  request.input('data_fim_real', sql.VarChar, projeto.data_fim_real);
  request.input('valor_orcado', sql.VarChar, projeto.valor_orcado);
  request.input('valor_realizado', sql.VarChar, projeto.valor_realizado);
  request.input('percentual_conclusao', sql.VarChar, projeto.percentual_conclusao);
  request.input('status_id', sql.VarChar, projeto.status_id);
  request.input('prioridade', sql.VarChar, projeto.prioridade);
  request.input('coligada_id', sql.VarChar, projeto.coligada_id);
  request.input('filial_id', sql.VarChar, projeto.filial_id);
  request.input('gerente_id', sql.VarChar, projeto.gerente_id);
  request.input('observacoes', sql.VarChar, projeto.observacoes);
  request.input('ativo', sql.Bit, projeto.ativo);
  request.input('created_by', sql.Int, projeto.created_by); 

  const query = `
    INSERT INTO Projeto (codigo, nome, descricao, organizacao_id, contrato_id, data_inicio, data_fim_prevista, data_fim_real, valor_orcado, valor_realizado, percentual_conclusao, status_id, prioridade, coligada_id, filial_id, gerente_id, observacoes, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @organizacao_id, @contrato_id, @data_inicio, @data_fim_prevista, @data_fim_real, @valor_orcado, @valor_realizado, @percentual_conclusao, @status_id, @prioridade, @coligada_id, @filial_id, @gerente_id, @observacoes, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Projeto cadastrado com sucesso!' };
};

module.exports = {
  createProjetoQuery,
};
