const { body, validationResult } = require('express-validator');


const validateFilial = [
  // Regras de validação para os campos principais
  body('coligada_id').notEmpty().withMessage('A coligada_id é obrigatória.'),
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  body('razao_social').notEmpty().withMessage('razao_social é obrigatório.'),
  body('cnpj').notEmpty().withMessage('cnpj é obrigatório.'),
  body('inscricao_estadual').notEmpty().withMessage('inscricao_estadual é obrigatório.'),
  body('inscricao_municipal').notEmpty().withMessage('inscricao_municipal é obrigatório.'),
  body('matriz').notEmpty().withMessage('matriz é obrigatória.'),
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
  validateFilial,
};
