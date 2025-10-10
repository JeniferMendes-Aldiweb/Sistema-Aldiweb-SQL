// validators/pessoas.validator.js

const { body, validationResult } = require('express-validator');

// Middleware com as regras de validação para 'pessoa'
const validatePessoa = [
  // As regras
  body('nome').trim().notEmpty().withMessage('O nome é obrigatório.'),
  body('email').isEmail().withMessage('Forneça um email válido.').normalizeEmail(),

  // Uma função middleware que verifica os resultados da validação
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Se houver erros, retorna uma resposta 400 com os detalhes
      return res.status(400).json({ errors: errors.array() });
    }
    // Se não houver erros, passa para o próximo middleware (o controller)
    next();
  },
];

module.exports = {
  validatePessoa,
};
