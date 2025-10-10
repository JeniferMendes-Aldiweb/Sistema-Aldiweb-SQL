// routes/pessoas.routes.js

const express = require('express');
const router = express.Router();

// 1. O caminho para o controller continua o mesmo
const { createPessoa, getAllPessoas } = require('../controllers/pessoaController');

// 2. O caminho para o validator agora aponta para a subpasta
const { validatePessoa } = require('../controllers/validates/pessoaValidator');

// Rota GETs
router.get('/', getAllPessoas);

// Rota POST com a cadeia de execução correta
router.post('/', validatePessoa, createPessoa);

module.exports = router;
