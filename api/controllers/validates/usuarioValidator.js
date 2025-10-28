const { body, validationResult } = require('express-validator');

const validateUsuario = [
  // Regras de validação para os campos principais
  body('pessoa_id').notEmpty().withMessage('A pessoa_id é obrigatória.'),
  body('username').notEmpty().withMessage('O username é obrigatório.'),
  body('email').notEmpty().withMessage('O email é obrigatório.'),
  body('senha_hash').notEmpty().withMessage('A senha_hash é obrigatória.'),
  body('ultimo_acesso').notEmpty().withMessage('O ultimo_acesso é obrigatório.'),
  body('tentativas_login').notEmpty().withMessage('A tentativas_login é obrigatória.'),
  body('bloqueado').isBoolean().withMessage('O campo bloqueado deve ser verdadeiro ou falso..'),
  body('bloqueado_em').notEmpty().withMessage('O bloqueado_em é obrigatório.'),
  body('token_recuperacao').notEmpty().withMessage('O token_recuperacao é obrigatório.'),
  body('token_expiracao').notEmpty().withMessage('O token_expiracao é obrigatório.'),
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
  validateUsuario,
};