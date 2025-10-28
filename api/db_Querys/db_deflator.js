const { sql } = require('../db_Querys/db_config');

const createDeflatorQuery = async (deflator) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, deflator.codigo);
  request.input('nome', sql.VarChar, deflator.nome);
  request.input('descricao', sql.VarChar, deflator.descricao);
  request.input('tipo', sql.VarChar, deflator.tipo);
  request.input('fonte', sql.VarChar, deflator.fonte);
  request.input('ativo', sql.Bit, deflator.ativo);
  request.input('created_by', sql.Int, deflator.created_by); 

  const query = `
    INSERT INTO Deflator (codigo, nome, descricao, tipo, fonte, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @tipo, @fonte, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Deflator cadastrado com sucesso!' };
};

module.exports = {
  createDeflatorQuery,
};
