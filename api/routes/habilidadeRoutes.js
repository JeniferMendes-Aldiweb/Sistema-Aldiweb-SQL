
const express = require('express');
const router = express.Router();

const { createHabilidade } = require('../controllers/habilidadeController');
const { validateHabilidade } = require('../controllers/validates/habilidadeValidator');

router.post('/', validateHabilidade, createHabilidade);

module.exports = router;
