const { sql } = require('../db_Querys/db_config');

const createPerfilQuery = async (perfil) => {
  const request = new sql.Request();

  request.input('codigo', sql.VarChar, perfil.codigo);
  request.input('nome', sql.VarChar, perfil.nome);
  request.input('descricao', sql.VarChar, perfil.descricao);
  request.input('modulo_id', sql.VarChar, perfil.modulo_id);
  request.input('nivel', sql.VarChar, perfil.nivel);
  request.input('ativo', sql.Bit, perfil.ativo);
  request.input('created_by', sql.Int, perfil.created_by); 

  const query = `
    INSERT INTO Perfil (codigo, nome, descricao, modulo_id, nivel, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @modulo_id, @nivel, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Perfil cadastrado com sucesso!' };
};

module.exports = {
  createPerfilQuery,
};
