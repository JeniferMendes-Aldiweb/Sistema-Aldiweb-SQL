const { body, validationResult } = require('express-validator');

const validatePessoa = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  body('cpf').notEmpty().withMessage('O cpf é obrigatório.'),
  body('rg').notEmpty().withMessage('O rg é obrigatório.'),
  body('data_nascimento').notEmpty().withMessage('A data de nascimento é obrigatória.'),
  body('email').notEmpty().withMessage('O Email é obrigatório.'),
  body('telefone').notEmpty().withMessage('O telefone é obrigatório.'),
  body('celular').notEmpty().withMessage('O celular é obrigatório.'),
  body('foto_url').notEmpty().withMessage('O foto é obrigatório.'),
  body('tipo').notEmpty().withMessage('O tipo é obrigatório.'),
  body('coligada_id').notEmpty().withMessage('A coligada_id é obrigatória.'),
  body('filial_id').notEmpty().withMessage('A filial_id é obrigatória'),
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
  validatePessoa,
};
