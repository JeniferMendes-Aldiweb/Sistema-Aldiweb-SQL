const express = require('express');
const router = express.Router();

const { createPermissao } = require('../controllers/permissaoController');
const { validatePermissao } = require('../controllers/validates/permissaoValidator');

router.post('/', validatePermissao, createPermissao);

module.exports = router;
