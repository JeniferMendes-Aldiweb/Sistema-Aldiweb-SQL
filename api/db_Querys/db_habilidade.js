const { sql } = require('../db_Querys/db_config');

const createHabilidadeQuery = async (habilidade) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, habilidade.codigo);
  request.input('nome', sql.VarChar, habilidade.nome);
  request.input('descricao', sql.VarChar, habilidade.descricao);
  request.input('categoria', sql.VarChar, habilidade.categoria);
  request.input('ativo', sql.Bit, habilidade.ativo);
  request.input('created_by', sql.Int, habilidade.created_by); 

  const query = `
    INSERT INTO Habilidade (codigo, nome, descricao, categoria, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @categoria, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Habilidade cadastrada com sucesso!' };
};

module.exports = {
  createHabilidadeQuery,
};
