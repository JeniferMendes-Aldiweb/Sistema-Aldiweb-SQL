const { body, validationResult } = require('express-validator');

const validateOrganizacao = [
  //Regras de validação para os campos principais
  body('tipo').notEmpty().withMessage('O tipo é obrigatório.'),
  
  body('codigo').notEmpty().withMessage('O codigo é obrigatório.'),
  
  body('nome_fantasia').notEmpty().withMessage('O nome_fantasia é obrigatório.'),
  
  body('razao_social').notEmpty().withMessage('A razao_social é obrigatório.'),
  
  body('cnpj_cpf').notEmpty().withMessage('O cnpj_cpf é obrigatório.')
  .isNumeric().withMessage('O campo cnpj_cpf deve conter apenas números.')
  .isLength({ min: 11, max: 14 }).withMessage('A cnpj_cpf deve ter entre 11 e 14 dígitos.'),
  
  body('inscricao_estadual').notEmpty().withMessage('A inscricao_estadual é obrigatório.')
  .isNumeric().withMessage('O campo inscricao_estadual deve conter apenas números.')
  .isLength({ min: 9, max: 12 }).withMessage('A inscricao_estadual deve ter entre 9 e 12 dígitos.'),

  body('inscricao_municipal').notEmpty().withMessage('A inscricao_municipal é obrigatório.')
  .isNumeric().withMessage('O campo inscricao_municipal deve conter apenas números.')
  .isLength({ min: 9, max: 12 }).withMessage('A inscricao_municipal deve ter entre 9 e 12 dígitos.'),

  body('email').notEmpty().withMessage('O email é obrigatório.'),
  
  body('telefone').notEmpty().withMessage('O telefone é obrigatório.')
  .isNumeric().withMessage('O campo telefone deve conter apenas números.'),
  
  body('site').notEmpty().withMessage('O site é obrigatório.'),
  
  body('observacoes').optional().isString().withMessage('A observacoes é obrigatória.'),
  
  body('coligada_id').notEmpty().withMessage('A coligada_id é obrigatória.')
  .isInt().withMessage('O coligada_id deve ser um número inteiro.'),

  body('filial_id').notEmpty().withMessage('A filial_id é obrigatória')
  .isInt().withMessage('O filial_id deve ser um número inteiro.'),
  
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
