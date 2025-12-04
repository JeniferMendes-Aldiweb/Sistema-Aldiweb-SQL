const { body, validationResult } = require('express-validator');

const validatePessoa = [
  // Regras de validação para os campos principais
  body('codigo').notEmpty().withMessage('O código é obrigatório.'),
  
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  
  body('cpf').notEmpty().withMessage('O cpf é obrigatório.')
  .isNumeric().withMessage('O campo cpf deve conter apenas números.')
  .isLength({ min: 11, max: 11 }).withMessage('O cpf deve ter 11  dígitos.'),
  
  body('rg').notEmpty().withMessage('O rg é obrigatório.')
  .isNumeric().withMessage('O campo rg deve conter apenas números.')
  .isLength({ min: 9, max: 11 }).withMessage('O rg deve ter entre 7 e 9 dígitos.'),
  
  body('data_nascimento').notEmpty().withMessage('A data de nascimento é obrigatória.')
  .isISO8601().withMessage('A data_nascimento deve estar em formato válido (AAAA-MM-DD).'),
  
  body('email').notEmpty().withMessage('O Email é obrigatório.'),
  
  body('telefone').notEmpty().withMessage('O telefone é obrigatório.')
  .isNumeric().withMessage('O campo telefone deve conter apenas números.'),
  
  body('celular').notEmpty().withMessage('O celular é obrigatório.')
  .isNumeric().withMessage('O campo celular deve conter apenas números.'),
  
  body('foto_url').notEmpty().withMessage('a url da foto é obrigatória.'),
  
  body('tipo').notEmpty().withMessage('O tipo é obrigatório.'),
  
  body('coligada_id').notEmpty().withMessage('A coligada_id é obrigatória.')
  .isInt().withMessage('A coligada_id deve ser um número inteiro.'),
  
  body('filial_id').notEmpty().withMessage('A filial_id é obrigatória')
  .isInt().withMessage('A filial_id deve ser um número inteiro.'),
  
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
