
const express = require('express');
const router = express.Router();

const { createProjeto } = require('../controllers/projetoController');
const { validateProjeto } = require('../controllers/validates/projetoValidator');

router.post('/', validateProjeto, createProjeto);

module.exports = router;
