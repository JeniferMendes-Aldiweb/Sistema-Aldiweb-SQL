const express = require('express');
const router = express.Router();

const { createProposta } = require('../controllers/propostaController');
const { validateProposta } = require('../controllers/validates/propostaValidator');

router.post('/', validateProposta, createProposta);

module.exports = router;
