const { sql } = require('../db_Querys/db_config');

const createTarefaQuery = async (tarefa) => {
  const request = new sql.Request();

  request.input('atividade_id', sql.VarChar, tarefa.atividade_id);
  request.input('codigo', sql.VarChar, tarefa.codigo);
  request.input('titulo', sql.VarChar, tarefa.titulo);
  request.input('descricao', sql.VarChar, tarefa.descricao);
  request.input('ordem', sql.VarChar, tarefa.ordem);
  request.input('data_inicio', sql.VarChar, tarefa.data_inicio);
  request.input('data_fim_prevista', sql.VarChar, tarefa.data_fim_prevista);
  request.input('data_fim_real', sql.VarChar, tarefa.data_fim_real);
  request.input('horas_estimadas', sql.VarChar, tarefa.horas_estimadas);
  request.input('horas_realizadas', sql.VarChar, tarefa.horas_realizadas);
  request.input('prioridade', sql.VarChar, tarefa.prioridade);
  request.input('percentual_conclusao', sql.VarChar, tarefa.percentual_conclusao);
  request.input('status_id', sql.VarChar, tarefa.status_id);
  request.input('tarefa_predecessora_id', sql.Int, tarefa.tarefa_predecessora_id || null);
  request.input('observacoes', sql.VarChar, tarefa.observacoes);
  request.input('ativo', sql.Bit, tarefa.ativo);
  request.input('created_by', sql.Int, tarefa.created_by); 

  const query = `
    INSERT INTO Tarefa (atividade_id, codigo, titulo, descricao, ordem, data_inicio, data_fim_prevista, data_fim_real, horas_estimadas, horas_realizadas, prioridade, percentual_conclusao, status_id, tarefa_predecessora_id, observacoes, ativo, created_by)
    VALUES (@atividade_id, @codigo, @titulo, @descricao, @ordem, @data_inicio, @data_fim_prevista, @data_fim_real, @horas_estimadas, @horas_realizadas, @prioridade, @percentual_conclusao, @status_id, @tarefa_predecessora_id, @observacoes, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Tarefa cadastrada com sucesso!' };
};

module.exports = {
  createTarefaQuery,
};
