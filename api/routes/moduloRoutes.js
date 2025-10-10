
const express = require('express');
const router = express.Router();

const { createModulo } = require('../controllers/moduloController');
const { validateModulo } = require('../controllers/validates/moduloValidator');

// Rota POST /api/modulos
router.post('/', validateModulo, createModulo);

module.exports = router;
