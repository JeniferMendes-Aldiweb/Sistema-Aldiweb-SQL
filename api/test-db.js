// test-db.js
const sql = require('mssql');
require('dotenv').config(); // Para carregar o arquivo .env

// Copie a configuração do seu db.config.js
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function testConnection() {
  try {
    console.log('Tentando conectar ao SQL Server...');
    // Tenta criar uma conexão única, sem usar o pool
    await sql.connect(dbConfig);
    console.log('Conexão bem-sucedida!');

    // Opcional: Fazer uma query simples para garantir
    const result = await sql.query`SELECT 1+1 AS result`;
    console.log('Query de teste executada com sucesso:', result.recordset);

  } catch (err) {
    console.error('ERRO AO CONECTAR:', err);
  } finally {
    // Garante que a conexão seja fechada
    await sql.close();
    console.log('Conexão fechada.');
  }
}

testConnection();
