const { body, validationResult } = require('express-validator');

const validateContato = [
  // Regras de validação para os campos principais
  body('organizacao_id').notEmpty().withMessage('O id da organização é obrigatório.')
  .isInt().withMessage('O organizacao_id deve ser um número inteiro.'),
  
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  
  body('cargo').notEmpty().withMessage('O cargo é obrigatório.'),
  
  body('email').notEmpty().withMessage('O email é obrigatório.'),
  
  body('telefone').notEmpty().withMessage('O telefone é obrigatório.')
  .isNumeric().withMessage('O campo telefone deve conter apenas números.'),
  
  body('celular').notEmpty().withMessage('O celular é obrigatório.')
  .isNumeric().withMessage('O campo celular deve conter apenas números.'),
  
  body('departamento').notEmpty().withMessage('O departamento é obrigatório.'),
  
  body('principal').isBoolean().withMessage('O principal é obrigatório.'),
  
  body('observacoes').optional().isString().withMessage('o campo observacoes é obrigatório.'),
  
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
  validateContato,
};
