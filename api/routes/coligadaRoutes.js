
const express = require('express');
const router = express.Router();

const { createColigada } = require('../controllers/coligadaController');
const { validateColigada } = require('../controllers/validates/coligadaValidator');

router.post('/', validateColigada, createColigada);

module.exports = router;
