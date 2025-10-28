const express = require('express');
const router = express.Router();

const { createAtividade } = require('../controllers/atividadeController');
const { validateAtividade } = require('../controllers/validates/atividadeValidator');

router.post('/', validateAtividade, createAtividade);

module.exports = router;
