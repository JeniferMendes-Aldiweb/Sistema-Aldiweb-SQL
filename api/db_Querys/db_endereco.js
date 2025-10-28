const { sql } = require('../db_Querys/db_config');

const createEnderecoQuery = async (endereco) => {
  const request = new sql.Request();

  request.input('cep', sql.VarChar, endereco.cep);
  request.input('logradouro', sql.VarChar, endereco.logradouro);
  request.input('numero', sql.VarChar, endereco.numero);
  request.input('complemento', sql.VarChar, endereco.complemento);
  request.input('bairro', sql.VarChar, endereco.bairro);
  request.input('cidade', sql.VarChar, endereco.cidade);
  request.input('estado', sql.VarChar, endereco.estado);
  request.input('pais', sql.VarChar, endereco.pais);
  request.input('latitude', sql.VarChar, endereco.latitude);
  request.input('longitude', sql.VarChar, endereco.longitude);

  const query = `
    INSERT INTO Endereco (cep, logradouro, numero, complemento, bairro, cidade, estado, pais, latitude, longitude)
    VALUES (@cep, @logradouro, @numero, @complemento, @bairro, @cidade, @estado, @pais, @latitude, @longitude);
  `;
  await request.query(query);
  return { message: 'Endereço cadastrado com sucesso!' };
};

module.exports = {
  createEnderecoQuery,
};
