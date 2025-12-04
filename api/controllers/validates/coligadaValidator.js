const { body, validationResult } = require('express-validator');


const validateColigada = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),

  body('nome').notEmpty().withMessage('O nome é obrigatório.'),

  body('razao_social').notEmpty().withMessage('razao_social é obrigatório.'),

  body('cnpj').notEmpty().withMessage('cnpj é obrigatório.')
  .isNumeric().withMessage('O campo cnpj deve conter apenas números.')
  .isLength({ min: 14, max: 14 }).withMessage('O cnpj deve ter 14 dígitos.'),

  body('inscricao_estadual').notEmpty().withMessage('inscricao_estadual é obrigatório.')
  .isNumeric().withMessage('O campo inscricao_estadual deve conter apenas números.')
  .isLength({ min: 9, max: 14 }).withMessage('A inscricao_estadual deve ter entre 9 e 12 dígitos.'),

  body('inscricao_municipal').notEmpty().withMessage('inscricao_municipal é obrigatório.')
  .isNumeric().withMessage('O campo inscricao_municipal deve conter apenas números.')
  .isLength({ min: 6, max: 14 }).withMessage('A inscricao_municipal deve ter entre 9 e 12 dígitos.'),

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
  validateColigada,
};
