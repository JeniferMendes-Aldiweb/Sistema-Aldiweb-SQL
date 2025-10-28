
const express = require('express');
const router = express.Router();

const { createProduto } = require('../controllers/produtoController');
const { validateProduto } = require('../controllers/validates/produtoValidator');

router.post('/', validateProduto, createProduto);

module.exports = router;
