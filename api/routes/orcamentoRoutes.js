
const express = require('express');
const router = express.Router();

const { createOrcamento } = require('../controllers/orcamentoController');
const { validateOrcamento } = require('../controllers/validates/orcamentoValidator');

router.post('/', validateOrcamento, createOrcamento);

module.exports = router;
