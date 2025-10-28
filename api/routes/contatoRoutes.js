
const express = require('express');
const router = express.Router();

const { createContato } = require('../controllers/contatoController');
const { validateContato } = require('../controllers/validates/contatoValidator');

router.post('/', validateContato, createContato);

module.exports = router;
