const { body, validationResult } = require('express-validator');

const validateOrganizacao = [
  // Regras de validação para os campos principais
  body('tipo').notEmpty().withMessage('O tipo é obrigatório.'),
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
  body('nome_fantasia').notEmpty().withMessage('O nome_fantasia é obrigatório.'),
  body('razao_social').notEmpty().withMessage('A razao_social é obrigatório.'),
  body('cnpj_cpf').notEmpty().withMessage('O cnpj_cpf é obrigatório.'),
  body('inscricao_estadual').notEmpty().withMessage('A inscricao_estadual é obrigatório.'),
  body('inscricao_municipal').notEmpty().withMessage('A inscricao_municipal é obrigatório.'),
  body('email').notEmpty().withMessage('O email é obrigatório.'),
  body('telefone').notEmpty().withMessage('O telefone é obrigatório.'),
  body('site').notEmpty().withMessage('O site é obrigatório.'),
  body('observacoes').notEmpty().withMessage('A observacoes é obrigatória.'),
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
  validateOrganizacao,
};
