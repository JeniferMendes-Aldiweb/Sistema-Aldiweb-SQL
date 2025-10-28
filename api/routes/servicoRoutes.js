
const express = require('express');
const router = express.Router();

const { createServico } = require('../controllers/servicoController');
const { validateServico } = require('../controllers/validates/servicoValidator');

router.post('/', validateServico, createServico);

module.exports = router;
