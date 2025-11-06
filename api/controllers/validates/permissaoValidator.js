const { body, validationResult } = require('express-validator');

const validatePermissao = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),
  
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  
  body('descricao').optional().isString().withMessage('A descrição é obrigatória.'),
  
  body('modulo_id').notEmpty().withMessage('O modulo_id é obrigatório.')
  .isInt().withMessage('O modulo_id deve ser um número inteiro.'),
  
  body('recurso').notEmpty().withMessage('O recurso é obrigatório.'),
  
  body('acao').notEmpty().withMessage('A acao é obrigatória.'),
  
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
  validatePermissao,
};
