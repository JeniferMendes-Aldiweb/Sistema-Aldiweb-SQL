const { sql } = require('../db_Querys/db_config');

const createUsuarioQuery = async (usuario) => {
  const request = new sql.Request();

  request.input('pessoa_id', sql.VarChar, usuario.pessoa_id);
  request.input('username', sql.VarChar, usuario.username);
  request.input('email', sql.VarChar, usuario.email);
  request.input('senha_hash', sql.VarChar, usuario.senha_hash);
  request.input('ultimo_acesso', sql.VarChar, usuario.ultimo_acesso);
  request.input('tentativas_login', sql.VarChar, usuario.tentativas_login);
  request.input('bloqueado', sql.Bit, usuario.bloqueado);
  request.input('bloqueado_em', sql.VarChar, usuario.bloqueado_em);
  request.input('token_recuperacao', sql.VarChar, usuario.token_recuperacao);
  request.input('token_expiracao', sql.VarChar, usuario.token_expiracao);
  request.input('ativo', sql.Bit, usuario.ativo);
  request.input('created_by', sql.Int, usuario.created_by); 

  const query = `
    INSERT INTO Usuario (pessoa_id, username, email, senha_hash, ultimo_acesso, tentativas_login, bloqueado, bloqueado_em, token_recuperacao, token_expiracao, ativo, created_by)
    VALUES (@pessoa_id, @username, @email, @senha_hash, @ultimo_acesso, @tentativas_login, @bloqueado, @bloqueado_em, @token_recuperacao, @token_expiracao, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Usuário cadastrado com sucesso!' };
};

module.exports = {
  createUsuarioQuery,
};
