const { body, validationResult } = require('express-validator');


const validateEndereco = [
  // Regras de validação para os campos principais
  body('cep').notEmpty().withMessage('O cep é obrigatório.'),
  body('logradouro').notEmpty().withMessage('O logradouro é obrigatório.'),
  body('numero').notEmpty().withMessage('O numero é obrigatório.'),
  body('complemento').notEmpty().withMessage('O complemento é obrigatório.'),
  body('bairro').notEmpty().withMessage('O bairro é obrigatório.'),
  body('cidade').notEmpty().withMessage('A cidade é obrigatória.'),
  body('estado').notEmpty().withMessage('O estado é obrigatório.'),
  body('pais').notEmpty().withMessage('O pais é obrigatório.'),
  body('latitude').notEmpty().withMessage('A latitude é obrigatória.'),
  body('longitude').notEmpty().withMessage('A longitude é obrigatória.'),

  // Middleware que verifica os resultados
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateEndereco,
};
