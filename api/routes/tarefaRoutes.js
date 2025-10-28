const express = require('express');
const router = express.Router();

const { createTarefa } = require('../controllers/tarefaController');
const { validateTarefa } = require('../controllers/validates/tarefaValidator');

router.post('/', validateTarefa, createTarefa);

module.exports = router;
