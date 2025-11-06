const { body, validationResult } = require('express-validator');

const validateTarefa = [
  // Regras de validação para os campos principais
  body('atividade_id').notEmpty().withMessage('A atividade_id é obrigatória.')
  .isInt().withMessage('O atividade_id deve ser um número inteiro.'),
  
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
  
  body('titulo').notEmpty().withMessage('O titulo é obrigatório.'),
  
  body('descricao').optional().isString().withMessage('A descricao é obrigatória.'),
  
  body('ordem').notEmpty().withMessage('A ordem é obrigatória.'),
  
  body('data_inicio').notEmpty().withMessage('A data_inicio é obrigatória.')
  .isISO8601().withMessage('A data_inicio deve estar em formato válido (AAAA-MM-DD).'),
  
  body('data_fim_prevista').notEmpty().withMessage('A data_fim_prevista é obrigatória.')
  .isISO8601().withMessage('A data_fim_prevista deve estar em formato válido (AAAA-MM-DD).'),

  body('data_fim_real').notEmpty().withMessage('A data_fim_real é obrigatória.')
  .isISO8601().withMessage('A data_fim_real deve estar em formato válido (AAAA-MM-DD).'),
  
  body('horas_estimadas').notEmpty().withMessage('A horas_estimadas é obrigatória.')
  .isNumeric().withMessage('O campo horas_estimadas deve conter apenas números.'),
  
  body('horas_realizadas').notEmpty().withMessage('A horas_realizadas é obrigatória.')
  .isNumeric().withMessage('O campo horas_realizadas deve conter apenas números.'),

  body('prioridade').notEmpty().withMessage('A prioridade é obrigatória.'),
  
  body('percentual_conclusao').notEmpty().withMessage('O percentual_conclusao é obrigatório.'),
  
  body('status_id').notEmpty().withMessage('O status_id é obrigatório.')
  .isInt().withMessage('O status_id deve ser um número inteiro.'),
  
  body('tarefa_predecessora_id').notEmpty().withMessage('A tarefa_predecessora_id é obrigatória.')
  .isInt().withMessage('A tarefa_predecessora_id deve ser um número inteiro.'),
  
  body('observacoes').optional().isString().withMessage('A observacoes é obrigatória'),
  
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