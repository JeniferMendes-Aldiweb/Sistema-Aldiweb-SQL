const { body, validationResult } = require('express-validator');


const validateEndereco = [
  // Regras de validação para os campos principais
  body('cep').notEmpty().withMessage('O cep é obrigatório.')
  .isNumeric().withMessage('O campo cep deve conter apenas números.')
   .isLength({ min: 8, max: 8 }).withMessage('O cep deve ter entre 9 e 12 dígitos.'),
  
  body('logradouro').notEmpty().withMessage('O logradouro é obrigatório.'),
  
  body('numero').notEmpty().withMessage('O numero é obrigatório.')
  .isNumeric().withMessage('O campo numero deve conter apenas números.'),
  
  body('complemento').notEmpty().withMessage('O complemento é obrigatório.'),
  
  body('bairro').notEmpty().withMessage('O bairro é obrigatório.'),
  
  body('cidade').notEmpty().withMessage('A cidade é obrigatória.'),
  
  body('estado').notEmpty().withMessage('O estado é obrigatório.'),
  
  body('pais').notEmpty().withMessage('O pais é obrigatório.'),
  
  body('latitude').notEmpty().withMessage('A latitude é obrigatória.')
  .isFloat({ min: -90, max: 90 }).withMessage('A latitude deve ser um número entre -90 e 90.'),
  
  body('longitude').notEmpty().withMessage('A longitude é obrigatória.')
  .isFloat({ min: -180, max: 180 }).withMessage('A longitude deve ser um número entre -180 e 180.'),

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
