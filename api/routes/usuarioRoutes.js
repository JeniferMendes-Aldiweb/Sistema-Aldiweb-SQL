const express = require('express');
const router = express.Router();

const { createUsuario } = require('../controllers/usuarioController');
const { validateUsuario } = require('../controllers/validates/usuarioValidator');

router.post('/', validateUsuario, createUsuario);

module.exports = router;
