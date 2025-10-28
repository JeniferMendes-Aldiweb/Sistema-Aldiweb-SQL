const { sql } = require('../db_Querys/db_config');

const createPessoaQuery = async (pessoa) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, pessoa.codigo);
  request.input('nome', sql.VarChar, pessoa.nome);
  request.input('cpf', sql.VarChar, pessoa.cpf);
  request.input('rg', sql.VarChar, pessoa.rg);
  request.input('data_nascimento', sql.VarChar, pessoa.data_nascimento);
  request.input('email', sql.VarChar, pessoa.email);
  request.input('telefone', sql.VarChar, pessoa.telefone);
  request.input('celular', sql.VarChar, pessoa.celular);
  request.input('foto_url', sql.VarChar, pessoa.foto_url);
  request.input('tipo', sql.VarChar, pessoa.tipo);
  request.input('coligada_id', sql.VarChar, pessoa.coligada_id);
  request.input('filial_id', sql.VarChar, pessoa.filial_id);
  request.input('ativo', sql.Bit, pessoa.ativo);
  request.input('created_by', sql.Int, pessoa.created_by); 

  const query = `
    INSERT INTO Pessoa (codigo, nome, cpf, rg, data_nascimento, email, telefone, celular, foto_url, tipo, coligada_id, filial_id, ativo, created_by)
    VALUES (@codigo, @nome, @cpf, @rg, @data_nascimento, @email, @telefone, @celular, @foto_url, @tipo, @coligada_id, @filial_id, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Pessoa cadastrada com sucesso!' };
};

module.exports = {
  createPessoaQuery,
};
