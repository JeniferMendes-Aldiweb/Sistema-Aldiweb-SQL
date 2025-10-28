
const express = require('express');
const router = express.Router();

const { createOrganizacao } = require('../controllers/organizacaoController');
const { validateOrganizacao } = require('../controllers/validates/organizacaoValidator');

router.post('/', validateOrganizacao, createOrganizacao);

module.exports = router;
