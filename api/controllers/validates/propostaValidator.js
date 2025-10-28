const { body, validationResult } = require("express-validator");

const validateProposta = [
  // Regras de validação para os campos principais
  body("numero").notEmpty().withMessage("O número é obrigatório."),
  body("orcamento_id").notEmpty().withMessage("O orcamento_id é obrigatório."),
  body("data_emissao").notEmpty().withMessage("A data de emissão deve estar em um formato válido (YYYY-MM-DD)."),
  body("data_validade").notEmpty().withMessage("A data de validade deve estar em um formato válido (YYYY-MM-DD)."),
  body("titulo").notEmpty().withMessage("O título é obrigatório."),
  body("descricao").notEmpty().withMessage("A descrição é obrigatória."),
  body("valor_total").notEmpty().withMessage("O valor total deve ser um número positivo."),
  body("condicoes_pagamento").notEmpty().withMessage("A condição de pagamento é obrigatória."),
  body("prazo_entrega").notEmpty().withMessage("O prazo de entrega é obrigatório."),
  body("observacoes").notEmpty().withMessage("As observações devem ser um texto."),
  body("status_id").notEmpty().withMessage("O status_id é obrigatório."),
  body("responsavel_id").notEmpty().withMessage("O responsavel_id é obrigatório."),
  body("aprovada_em").notEmpty().withMessage("aprovada_em é obrigatório."),
  body("aprovada_por").notEmpty().withMessage("aprovada_por é obrigatório."),
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
  validateProposta,
};
