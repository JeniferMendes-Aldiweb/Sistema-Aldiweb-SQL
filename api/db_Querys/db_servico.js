const { sql } = require('../db_Querys/db_config');

const createServicoQuery = async (servico) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, servico.codigo);
  request.input('nome', sql.VarChar, servico.nome);
  request.input('descricao', sql.VarChar, servico.descricao);
  request.input('categoria', sql.VarChar, servico.categoria);
  request.input('unidade', sql.VarChar, servico.unidade);
  request.input('valor_hora', sql.VarChar, servico.valor_hora);
  request.input('valor_unitario', sql.VarChar, servico.valor_unitario);
  request.input('duracao_padrao_horas', sql.VarChar, servico.duracao_padrao_horas);
  request.input('ativo', sql.Bit, servico.ativo);
  request.input('created_by', sql.Int, servico.created_by); 

  const query = `
    INSERT INTO Servico (codigo, nome, descricao, categoria, unidade, valor_hora, valor_unitario, duracao_padrao_horas, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @categoria, @unidade, @valor_hora, @valor_unitario, @duracao_padrao_horas, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Serviço cadastrado com sucesso!' };
};

module.exports = {
  createServicoQuery,
};
