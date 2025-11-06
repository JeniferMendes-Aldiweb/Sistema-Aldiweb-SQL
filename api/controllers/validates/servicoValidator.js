const { body, validationResult } = require('express-validator');

const validateServico = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),
  
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  
  body('descricao').optional().isString().withMessage('A descrição é obrigatória.'),
  
  body('categoria').notEmpty().withMessage('A categoria é obrigatória.'),
  
  body('unidade').notEmpty().withMessage('A unidade é obrigatória.'),
  
  body('valor_hora').notEmpty().withMessage('O valor_hora é obrigatório.')
  .isNumeric().withMessage('O campo valor_hora deve conter apenas números.'),
  
  body('valor_unitario').notEmpty().withMessage('O valor_unitario é obrigatório.')
  .isNumeric().withMessage('O campo valor_unitario deve conter apenas números.'),
  
  body('duracao_padrao_horas').notEmpty().withMessage('A duracao_padrao_horas é obrigatória.')
  .isNumeric().withMessage('O campo duracao_padrao_horas deve conter apenas números.'),
  
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
  validateServico,
};
