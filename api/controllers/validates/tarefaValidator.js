const { body, validationResult } = require('express-validator');

const validateTarefa = [
  // Regras de validação para os campos principais
  body('atividade_id').notEmpty().withMessage('A atividade_id é obrigatória.'),
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
  body('titulo').notEmpty().withMessage('O titulo é obrigatório.'),
  body('descricao').notEmpty().withMessage('A descricao é obrigatória.'),
  body('ordem').notEmpty().withMessage('A ordem é obrigatória.'),
  body('data_inicio').notEmpty().withMessage('A data_inicio é obrigatória.'),
  body('data_fim_prevista').notEmpty().withMessage('A data_fim_prevista é obrigatória.'),
  body('data_fim_real').notEmpty().withMessage('A data_fim_real é obrigatória.'),
  body('horas_estimadas').notEmpty().withMessage('A horas_estimadas é obrigatória.'),
  body('horas_realizadas').notEmpty().withMessage('A horas_realizadas é obrigatória.'),
  body('prioridade').notEmpty().withMessage('A prioridade é obrigatória.'),
  body('percentual_conclusao').notEmpty().withMessage('O percentual_conclusao é obrigatório.'),
  body('status_id').notEmpty().withMessage('O status_id é obrigatório.'),
  body('tarefa_predecessora_id').notEmpty().withMessage('A tarefa_predecessora_id é obrigatória.'),
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
  validateTarefa,
};