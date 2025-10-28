const { body, validationResult } = require('express-validator');

const validateProjeto = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  body('descricao').notEmpty().withMessage('A descricao é obrigatória.'),
  body('organizacao_id').notEmpty().withMessage('A organizacao_id é obrigatória.'),
  body('contrato_id').notEmpty().withMessage('O contrato_id é obrigatório.'),
  body('data_inicio').notEmpty().withMessage('A data_inicio é obrigatória.'),
  body('data_fim_prevista').notEmpty().withMessage('A data_fim_prevista é obrigatória.'),
  body('data_fim_real').notEmpty().withMessage('A data_fim_real é obrigatória.'),
  body('valor_orcado').notEmpty().withMessage('O valor_orcado é obrigatório.'),
  body('valor_realizado').notEmpty().withMessage('O valor_realizado é obrigatório.'),
  body('percentual_conclusao').notEmpty().withMessage('O percentual_conclusao é obrigatório.'),
  body('status_id').notEmpty().withMessage('O status_id é obrigatório.'),
  body('prioridade').notEmpty().withMessage('A prioridade é obrigatória.'),
  body('coligada_id').notEmpty().withMessage('A coligada_id é obrigatória.'),
  body('filial_id').notEmpty().withMessage('A filial_id é obrigatória'),
  body('gerente_id').notEmpty().withMessage('A gerente_id é obrigatória'),
  body('observacoes').notEmpty().withMessage('A observacoes é obrigatória'),
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
  validateProjeto,
};