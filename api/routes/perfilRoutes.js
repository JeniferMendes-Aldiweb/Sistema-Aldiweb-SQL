const express = require('express');
const router = express.Router();

const { createPerfil } = require('../controllers/perfilController');
const { validatePerfil } = require('../controllers/validates/perfilValidator');

router.post('/', validatePerfil, createPerfil);

module.exports = router;
