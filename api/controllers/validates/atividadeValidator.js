const { body, validationResult } = require('express-validator');

const validateAtividade = [
  // Regras de validação para os campos principais
  body('projeto_id').notEmpty().withMessage('O projeto_id é obrigatório.'),
  body('projeto_fase_id').notEmpty().withMessage('O projeto_fase_id é obrigatório.'),
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  body('descricao').notEmpty().withMessage('A descricao é obrigatória.'),
  body('ordem').notEmpty().withMessage('A ordem é obrigatória.'),
  body('data_inicio').notEmpty().withMessage('A data_inicio é obrigatória.'),
  body('data_fim_prevista').notEmpty().withMessage('A data_fim_prevista é obrigatória.'),
  body('data_fim_real').notEmpty().withMessage('A data_fim_real é obrigatória.'),
  body('horas_estimadas').notEmpty().withMessage('A horas_estimadas é obrigatória.'),
  body('horas_realizadas').notEmpty().withMessage('A horas_realizadas é obrigatória.'),
  body('percentual_conclusao').notEmpty().withMessage('O percentual_conclusao é obrigatório.'),
  body('status_id').notEmpty().withMessage('O status_id é obrigatório.'),
  body('responsavel_id').notEmpty().withMessage('O responsavel_id é obrigatório.'),
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
  validateAtividade,
};