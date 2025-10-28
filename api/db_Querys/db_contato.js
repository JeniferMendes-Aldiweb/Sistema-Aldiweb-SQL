const { sql } = require('../db_Querys/db_config');

const createContatoQuery = async (contato) => {
  const request = new sql.Request();

  request.input('organizacao_id', sql.VarChar, contato.organizacao_id);
  request.input('nome', sql.VarChar, contato.nome);
  request.input('cargo', sql.VarChar, contato.cargo);
  request.input('email', sql.VarChar, contato.email);
  request.input('telefone', sql.VarChar, contato.telefone);
  request.input('celular', sql.VarChar, contato.celular);
  request.input('departamento', sql.VarChar, contato.departamento);
  request.input('principal', sql.Bit, contato.principal);
  request.input('observacoes', sql.VarChar, contato.observacoes);
  request.input('ativo', sql.Bit, contato.ativo);
  request.input('created_by', sql.Int, contato.created_by); 

  const query = `
    INSERT INTO Contato (organizacao_id, nome, cargo, email, telefone, celular, departamento, principal, observacoes, ativo, created_by)
    VALUES (@organizacao_id, @nome, @cargo, @email, @telefone, @celular, @departamento, @principal, @observacoes, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Contato cadastrado com sucesso!' };
};

module.exports = {
  createContatoQuery,
};
