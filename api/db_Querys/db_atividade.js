const { sql } = require('../db_Querys/db_config');

const createAtividadeQuery = async (atividade) => {
  const request = new sql.Request();

  request.input('projeto_id', sql.VarChar, atividade.projeto_id);
  request.input('projeto_fase_id', sql.VarChar, atividade.projeto_fase_id);
  request.input('codigo', sql.VarChar, atividade.codigo);
  request.input('nome', sql.VarChar, atividade.nome);
  request.input('descricao', sql.VarChar, atividade.descricao);
  request.input('ordem', sql.VarChar, atividade.ordem);
  request.input('data_inicio', sql.VarChar, atividade.data_inicio);
  request.input('data_fim_prevista', sql.VarChar, atividade.data_fim_prevista);
  request.input('data_fim_real', sql.VarChar, atividade.data_fim_real);
  request.input('horas_estimadas', sql.VarChar, atividade.horas_estimadas);
  request.input('horas_realizadas', sql.VarChar, atividade.horas_realizadas);
  request.input('percentual_conclusao', sql.VarChar, atividade.percentual_conclusao);
  request.input('status_id', sql.VarChar, atividade.status_id);
  request.input('responsavel_id', sql.VarChar, atividade.responsavel_id);
  request.input('observacoes', sql.VarChar, atividade.observacoes);
  request.input('ativo', sql.Bit, atividade.ativo);
  request.input('created_by', sql.Int, atividade.created_by); 

  const query = `
    INSERT INTO Atividade (projeto_id, projeto_fase_id, codigo, nome, descricao, ordem, data_inicio, data_fim_prevista, data_fim_real, horas_estimadas, horas_realizadas, percentual_conclusao, status_id, responsavel_id, observacoes, ativo, created_by)
    VALUES (@projeto_id, @projeto_fase_id, @codigo, @nome, @descricao, @ordem, @data_inicio, @data_fim_prevista, @data_fim_real, @horas_estimadas, @horas_realizadas, @percentual_conclusao, @status_id, @responsavel_id, @observacoes, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Atividade cadastrada com sucesso!' };
};

module.exports = {
  createAtividadeQuery,
};
