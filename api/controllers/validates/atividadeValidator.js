const { body, validationResult } = require('express-validator');

const validateAtividade = [
  // Regras de validação para os campos principais
  body('projeto_id').notEmpty().withMessage('O projeto_id é obrigatório.')
  .isInt().withMessage('O projeto_id deve ser um número inteiro.'),

  body('projeto_fase_id').notEmpty().withMessage('O projeto_fase_id é obrigatório.')
  .isInt().withMessage('O projeto_fase_id deve ser um número inteiro.'),

  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),

  body('nome').notEmpty().withMessage('O nome é obrigatório.'),

  body('descricao').optional().isString().withMessage('O campo descricao deve ser texto.'),

  body('ordem').notEmpty().withMessage('A ordem é obrigatória.'),

  body('data_inicio').notEmpty().withMessage('A data_inicio é obrigatória.')
  .isISO8601().withMessage('A data_inicio deve estar em formato válido (AAAA-MM-DD).'),

  body('data_fim_prevista').notEmpty().withMessage('A data_fim_prevista é obrigatória.')
  .isISO8601().withMessage('A data_fim_prevista deve estar em formato válido (AAAA-MM-DD).'),

  body('data_fim_real').notEmpty().withMessage('A data_fim_real é obrigatória.')
  .isISO8601().withMessage('A data_fim_real deve estar em formato válido (AAAA-MM-DD).'),

  body('horas_estimadas').notEmpty().withMessage('A horas_estimadas é obrigatória.')
  .isFloat({ min: 0 }).withMessage('A horas_estimadas deve ser um número.'),

  body('horas_realizadas').notEmpty().withMessage('A horas_realizadas é obrigatória.')
  .isFloat({ min: 0 }).withMessage('A horas_realizadas deve ser um número.'),

  body('percentual_conclusao').notEmpty().withMessage('O percentual_conclusao é obrigatório.')
  .isInt({ min: 0, max: 100 }).withMessage('O percentual_conclusao deve estar entre 0 e 100.'),
  
  body('status_id').notEmpty().withMessage('O status_id é obrigatório.')
  .isInt().withMessage('O status_id deve ser um número inteiro.'),

  body('responsavel_id').notEmpty().withMessage('O responsavel_id é obrigatório.')
  .isInt().withMessage('O responsavel_id deve ser um número inteiro.'),

  body('observacoes').optional().isString().withMessage('O campo observacoes deve ser texto.'),

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