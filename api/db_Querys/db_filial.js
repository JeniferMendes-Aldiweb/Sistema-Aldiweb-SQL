const { sql } = require('../db_Querys/db_config');

const createFilialQuery = async (filial) => {
  const request = new sql.Request();

  // Adiciona os parâmetros com base nos seus campos
  request.input('coligada_id', sql.VarChar, filial.coligada_id);
  request.input('codigo', sql.VarChar, filial.codigo);
  request.input('nome', sql.NVarChar, filial.nome);
  request.input('razao_social', sql.NVarChar, filial.razao_social);
  request.input('cnpj', sql.NVarChar, filial.cnpj);
  request.input('inscricao_estadual', sql.NVarChar, filial.inscricao_estadual);
  request.input('inscricao_municipal', sql.VarChar, filial.inscricao_municipal);
  request.input('matriz', sql.VarChar, filial.matriz);
  request.input('ativo', sql.Bit, filial.ativo);
  // created_at e updated_at geralmente são gerenciados pelo banco (com DEFAULT GETDATE())
  // created_by e updated_by viriam do usuário logado
  request.input('created_by', sql.Int, filial.created_by); 

  // Adapte o SQL para sua tabela e colunas
  const query = `
    INSERT INTO Filial (coligada_id ,codigo, nome, razao_social, cnpj, inscricao_estadual, inscricao_municipal, matriz, ativo, created_by)
    VALUES (@coligada_id, @codigo, @nome, @razao_social, @cnpj, @inscricao_estadual, @inscricao_municipal, @matriz, @ativo, @created_by);
  `;
  await request.query(query);
  return { message: 'Filial cadastrada com sucesso!' };
};



module.exports = {
  createFilialQuery,
};
