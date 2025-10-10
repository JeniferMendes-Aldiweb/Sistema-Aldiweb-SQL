const sql = require('mssql');

// Carregue as variáveis de ambiente (instale com 'npm install dotenv')
require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Para Azure
    trustServerCertificate: true // Mude para false em produção com certificados válidos
  }
};

// Função para conectar ao pool. Chamaremos isso uma vez quando o servidor iniciar.
const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('SQL Server Conectado (Pool)...');
  } catch (err) {
    console.error('Falha ao conectar ao banco de dados', err);
    process.exit(1); // Encerra o processo se não conseguir conectar
  }
};

module.exports = {
  sql,
  connectDB,
  dbConfig
};
