const { body, validationResult } = require('express-validator');

const validateProjeto = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
 
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
 
  body('descricao').optional().isString().withMessage('A descricao é obrigatória.'),
 
  body('organizacao_id').notEmpty().withMessage('A organizacao_id é obrigatória.')
  .isInt().withMessage('O organizacao_id deve ser um número inteiro.'),
 
  body('contrato_id').notEmpty().withMessage('O contrato_id é obrigatório.')
  .isInt().withMessage('O contrato_id deve ser um número inteiro.'),

  body('data_inicio').notEmpty().withMessage('A data_inicio é obrigatória.')
  .isISO8601().withMessage('A data_inicio deve estar em formato válido (AAAA-MM-DD).'),

  body('data_fim_prevista').notEmpty().withMessage('A data_fim_prevista é obrigatória.')
  .isISO8601().withMessage('A data_fim_prevista deve estar em formato válido (AAAA-MM-DD).'),
 
  body('data_fim_real').notEmpty().withMessage('A data_fim_real é obrigatória.')
  .isISO8601().withMessage('A data_fim_real deve estar em formato válido (AAAA-MM-DD).'),
 
  body('valor_orcado').notEmpty().withMessage('O valor_orcado é obrigatório.')
  .isNumeric().withMessage('O campo valor_orcado deve conter apenas números.'),
 
  body('valor_realizado').notEmpty().withMessage('O valor_realizado é obrigatório.')
  .isNumeric().withMessage('O campo valor_realizado deve conter apenas números.'),
 
  body('percentual_conclusao').notEmpty().withMessage('O percentual_conclusao é obrigatório.'),
 
  body('status_id').notEmpty().withMessage('O status_id é obrigatório.')
  .isInt().withMessage('O status_id deve ser um número inteiro.'),
 
  body('prioridade').notEmpty().withMessage('A prioridade é obrigatória.'),
 
  body('coligada_id').notEmpty().withMessage('A coligada_id é obrigatória.')
  .isInt().withMessage('O coligada_id deve ser um número inteiro.'),
 
  body('filial_id').notEmpty().withMessage('A filial_id é obrigatória')
  .isInt().withMessage('O filial_id deve ser um número inteiro.'),

  body('gerente_id').notEmpty().withMessage('A gerente_id é obrigatória')
  .isInt().withMessage('O gerente_id deve ser um número inteiro.'),

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
  validateProjeto,
};