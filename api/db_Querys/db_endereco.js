const { sql } = require('../db_Querys/db_config');

const createEnderecoQuery = async (endereco) => {
  const request = new sql.Request();

  // Adiciona os parâmetros com base nos seus campos
  request.input('cep', sql.VarChar, endereco.cep);
  request.input('numero', sql.NVarChar, endereco.numero);
  request.input('complemento', sql.NVarChar, endereco.complemento);
  request.input('bairro', sql.NVarChar, endereco.bairro);
  request.input('cidade', sql.NVarChar, endereco.cidade);
  request.input('estado', sql.NVarChar, endereco.estado);
  request.input('pais', sql.VarChar, endereco.pais);
  request.input('latitude', sql.VarChar, endereco.latitude);
  request.input('longitude', sql.VarChar, endereco.longitude);
  // created_at e updated_at geralmente são gerenciados pelo banco (com DEFAULT GETDATE())
  // created_by e updated_by viriam do usuário logado

  // Adapte o SQL para sua tabela e colunas
  const query = `
    INSERT INTO Endereco (cep, numero, complemento, bairro, cidade, estado, pais, latitude, longitude)
    VALUES (@cep, @numero, @complemento, @bairro, @cidade, @estado, @pais, @latitude, @longitude);
  `;
  await request.query(query);
  return { message: 'Endereço cadastrado com sucesso!' };
};

module.exports = {
  createEnderecoQuery,
};
