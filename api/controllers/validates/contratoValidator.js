const { body, validationResult } = require("express-validator");

const validateContrato = [
  // Regras de validação para os campos principais
  body("numero").notEmpty().withMessage("O número é obrigatório."),
  body("proposta_id").notEmpty().withMessage("A proposta_id é obrigatória."),
  body("data_assinatura").notEmpty().withMessage("A data_assinatura deve estar em um formato válido (YYYY-MM-DD)."),
  body("data_inicio").notEmpty().withMessage("A data_inicio deve estar em um formato válido (YYYY-MM-DD)."),
  body("data_fim").notEmpty().withMessage("A data_fim deve estar em um formato válido (YYYY-MM-DD)."),
  body("titulo").notEmpty().withMessage("O título é obrigatório."),
  body("descricao").notEmpty().withMessage("A descrição é obrigatória."),
  body("valor_total").notEmpty().withMessage("O valor total deve ser um número positivo."),
  body("condicoes_pagamento").notEmpty().withMessage("A condicoes_pagamento é obrigatória."),
  body("clausulas").notEmpty().withMessage("A clausulas é obrigatória."),
  body("observacoes").notEmpty().withMessage("As observações devem ser um texto."),
  body("arquivo_url").notEmpty().withMessage("o arquivo_url é obrigatório."),
  body("status_id").notEmpty().withMessage("O status_id é obrigatório."),
  body("responsavel_id").notEmpty().withMessage("O responsavel_id é obrigatório."),
  body("versao").notEmpty().withMessage("a versao é obrigatória."),
  body("contrato_anterior_id").notEmpty().withMessage("O contrato_anterior_id é obrigatório."),
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
