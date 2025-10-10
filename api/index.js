// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./db_Querys/db_config');

// Importa o arquivo de rotas de pessoas
const pessoasRoutes = require('./routes/pessoaRoutes');
const moduloRoutes = require('./routes/moduloRoutes');
const coligadaRoutes = require('./routes/coligadaRoutes');
const filialRoutes = require('./routes/filialRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');

connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares essenciais
app.use(cors());
app.use(bodyParser.json());

// Monta as rotas de pessoas sob o prefixo /api/pessoas
app.use('/api/pessoa', pessoasRoutes);
app.use('/api/modulo', moduloRoutes);
app.use('/api/coligada', coligadaRoutes);
app.use('/api/filial', filialRoutes);
app.use('/api/endereco', enderecoRoutes);


// Futuramente, você adicionará as rotas de outros recursos aqui
// const clientesRoutes = require('./routes/clientes.routes');
// app.use('/api/clientes', clientesRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
