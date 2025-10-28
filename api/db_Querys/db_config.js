const sql = require('mssql');

require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, 
    trustServerCertificate: true // Mude para false em produção com certificados válidos
  }
};

// Função para conectar ao pool.  quando o servidor iniciar.
const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('SQL Server Conectado (Pool)');
  } catch (err) {
    console.error('Falha ao conectar ao banco de dados', err);
    process.exit(1); 
  }
};

module.exports = {
  sql,
  connectDB,
  dbConfig
};
