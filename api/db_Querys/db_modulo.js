// db_Querys/modulos.query.js

const { sql } = require('../db_Querys/db_config');

const createModuloQuery = async (modulo) => {
  const request = new sql.Request();

  // Adiciona os parâmetros com base nos seus campos
  request.input('codigo', sql.VarChar, modulo.codigo);
  request.input('nome', sql.NVarChar, modulo.nome);
  request.input('descricao', sql.NVarChar, modulo.descricao);
  request.input('icone', sql.VarChar, modulo.icone);
  request.input('ordem', sql.Int, modulo.ordem);
  request.input('ativo', sql.Bit, modulo.ativo);
  // created_at e updated_at geralmente são gerenciados pelo banco (com DEFAULT GETDATE())
  // created_by e updated_by viriam do usuário logado
  request.input('created_by', sql.Int, modulo.created_by); 

  // Adapte o SQL para sua tabela e colunas
  const query = `
    INSERT INTO Modulo (codigo, nome, descricao, icone, ordem, ativo, created_by)
    VALUES (@codigo, @nome, @descricao, @icone, @ordem, @ativo, @created_by);
  `;

  await request.query(query);
  return { message: 'Módulo cadastrado com sucesso!' };
};

// (Futuramente, podemos adicionar findAllModulosQuery, etc.)

module.exports = {
  createModuloQuery,
};
