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
const pessoaRoutes = require('./routes/pessoaRoutes');
const organizacaoRoutes = require('./routes/organizacaoRoutes')
const contatoRoutes = require('./routes/contatoRoutes')
const funcaoRoutes = require('./routes/funcaoRoutes')
const habilidadeRoutes = require('./routes/habilidadeRoutes')
const produtoRoutes = require('./routes/produtoRoutes')
const servicoRoutes = require('./routes/servicoRoutes')
const deflatorRoutes = require('./routes/deflatorRoutes')
const orcamentoRoutes = require('./routes/orcamentoRoutes')
const propostaRoutes = require('./routes/propostaRoutes')
const contratoRoutes = require('./routes/contratoRoutes')
const projetoRoutes = require('./routes/projetoRoutes')
const atividadeRoutes = require('./routes/atividadeRoutes')
const tarefaRoutes = require('./routes/tarefaRoutes')
const permissaoRoutes = require('./routes/permissaoRoutes')
const perfilRoutes = require('./routes/perfilRoutes')
const usuarioRoutes = require('./routes/usuarioRoutes')

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
app.use('/api/pessoa', pessoaRoutes);
app.use('/api/organizacao', organizacaoRoutes)
app.use('/api/contato', contatoRoutes)
app.use('/api/funcao', funcaoRoutes)
app.use('/api/habilidade', habilidadeRoutes)
app.use('/api/produto', produtoRoutes)
app.use('/api/servico', servicoRoutes)
app.use('/api/deflator', deflatorRoutes)
app.use('/api/orcamento', orcamentoRoutes)
app.use('/api/proposta', propostaRoutes)
app.use('/api/contrato', contratoRoutes)
app.use('/api/projeto', projetoRoutes)
app.use('/api/atividade', atividadeRoutes)
app.use('/api/tarefa', tarefaRoutes)
app.use('/api/permissao', permissaoRoutes)
app.use('/api/perfil', perfilRoutes)
app.use('/api/usuario', usuarioRoutes)

// Futuramente, você adicionará as rotas de outros recursos aqui
// const clientesRoutes = require('./routes/clientes.routes');
// app.use('/api/clientes', clientesRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
