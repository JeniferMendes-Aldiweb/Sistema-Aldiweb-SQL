
const express = require('express');
const router = express.Router();

const { createPessoa } = require('../controllers/pessoaController');
const { validatePessoa } = require('../controllers/validates/pessoaValidator');

router.post('/', validatePessoa, createPessoa);

module.exports = router;
