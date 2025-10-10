const express = require('express');
const router = express.Router();

const { createFilial } = require('../controllers/filialController');
const { validateFilial } = require('../controllers/validates/filialValidator');

router.post('/', validateFilial, createFilial);

module.exports = router;
