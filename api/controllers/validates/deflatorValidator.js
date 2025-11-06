const { body, validationResult } = require('express-validator');

const validateDeflator = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),
  
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  
  body('descricao').optional().isString().withMessage('A descrição é obrigatória.'),
  
  body('tipo').notEmpty().withMessage('O tipo é obrigatório.'),
  
  body('fonte').notEmpty().withMessage('A fonte é obrigatória.'),
  
  body('ativo').isBoolean().withMessage('O campo "ativo" deve ser verdadeiro ou falso.'),

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
  validateDeflator,
};
