
const express = require('express');
const router = express.Router();

const { createFuncao } = require('../controllers/funcaoController');
const { validateFuncao } = require('../controllers/validates/funcaoValidator');

router.post('/', validateFuncao, createFuncao);

module.exports = router;
