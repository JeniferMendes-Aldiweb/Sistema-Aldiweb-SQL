const { body, validationResult } = require("express-validator");

const validateContrato = [
  // Regras de validação para os campos principais
  body("numero").notEmpty().withMessage("O numero é obrigatório.")
  .isNumeric().withMessage('O campo numero deve conter apenas números.'),

  body("proposta_id").notEmpty().withMessage("A proposta_id é obrigatória.")
  .isInt().withMessage('O proposta_id deve ser um número inteiro.'),

  body("data_assinatura").notEmpty().withMessage("A data_assinatura é obrigatoria.")
  .isISO8601().withMessage('A data_assinatura deve estar em formato válido (AAAA-MM-DD).'),

  body("data_inicio").notEmpty().withMessage("A data_inicio é obrigatoria.")
  .isISO8601().withMessage('A data_inicio deve estar em formato válido (AAAA-MM-DD).'),

  body("data_fim").notEmpty().withMessage("A data_fim é obrigatoria.")
  .isISO8601().withMessage('A data_fim deve estar em formato válido (AAAA-MM-DD).'),

  body("titulo").notEmpty().withMessage("O título é obrigatório."),

  body("descricao").optional().isString().withMessage("O campo descricao deve ser texto."),
  
  body("valor_total").notEmpty().withMessage("O valor total é obrigatorio.")
  .isFloat({ min: 0 }).withMessage("O valor_total deve ser um número positivo."),
  
  body("condicoes_pagamento").notEmpty().withMessage("A condicoes_pagamento é obrigatório."),
  
  body("clausulas").notEmpty().withMessage("A clausulas é obrigatória."),
  
  body("observacoes").optional().isString().withMessage("As observações devem ser um texto."),
  
  body("arquivo_url").notEmpty().withMessage("o arquivo_url é obrigatório."),
  
  body("status_id").notEmpty().withMessage("O status_id é obrigatório.")
  .isInt().withMessage('O status_id deve ser um número inteiro.'),
  
  body("responsavel_id").notEmpty().withMessage("O responsavel_id é obrigatório.")
  .isInt().withMessage('O responsavel_id deve ser um número inteiro.'),

  body("versao").notEmpty().withMessage("a versao é obrigatória."),
  
  body("contrato_anterior_id").notEmpty().withMessage("O contrato_anterior_id é obrigatório.")
  .isInt().withMessage('O contrato_anterior_id deve ser um número inteiro.'),
  
  body("ativo").isBoolean().withMessage('O campo "ativo" deve ser verdadeiro ou falso.'),

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
  validateContrato,
};
