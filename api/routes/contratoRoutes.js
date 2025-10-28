const express = require('express');
const router = express.Router();

const { createContrato } = require('../controllers/contratoController');
const { validateContrato } = require('../controllers/validates/contratoValidator');

router.post('/', validateContrato, createContrato);

module.exports = router;
