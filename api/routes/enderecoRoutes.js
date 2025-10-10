const express = require('express');
const router = express.Router();

const { createEndereco } = require('../controllers/enderecoController');
const { validateEndereco } = require('../controllers/validates/enderecoValidator');

router.post('/', validateEndereco, createEndereco);

module.exports = router;
