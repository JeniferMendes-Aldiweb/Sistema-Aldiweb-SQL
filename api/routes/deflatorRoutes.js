
const express = require('express');
const router = express.Router();

const { createDeflator } = require('../controllers/deflatorController');
const { validateDeflator } = require('../controllers/validates/deflatorValidator');

router.post('/', validateDeflator, createDeflator);

module.exports = router;
