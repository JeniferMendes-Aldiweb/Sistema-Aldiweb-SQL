const { body, validationResult } = require("express-validator");

const validateOrcamento = [
  // Regras de validação para os campos principais
  body("numero").notEmpty().withMessage("O número é obrigatório."),
  body("organizacao_id").notEmpty().withMessage("O organizacao_id é obrigatório."),
  body("contato_id").notEmpty().withMessage("O contato_id é obrigatório."),
  body("data_emissao").notEmpty().withMessage("A data de emissão deve estar em um formato válido (YYYY-MM-DD)."),
  body("data_validade").notEmpty().withMessage("A data de validade deve estar em um formato válido (YYYY-MM-DD)."),
  body("titulo").notEmpty().withMessage("O título é obrigatório."),
  body("descricao").notEmpty().withMessage("A descrição é obrigatória."),
  body("valor_subtotal").notEmpty().withMessage("O valor subtotal deve ser um número positivo."),
  body("valor_desconto").notEmpty().withMessage("O valor de desconto deve ser um número positivo."),
  body("percentual_desconto").notEmpty().withMessage("O percentual de desconto deve ser um número entre 0 e 100."),
  body("valor_total").notEmpty().withMessage("O valor total deve ser um número positivo."),
  body("observacoes").notEmpty().withMessage("As observações devem ser um texto."),
  body("status_id").notEmpty().withMessage("O status_id é obrigatório."),
  body("coligada_id").notEmpty().withMessage("A coligada_id é obrigatória."),
  body("filial_id").notEmpty().withMessage("A filial_id é obrigatória."),
  body("responsavel_id").notEmpty().withMessage("O responsavel_id é obrigatório."),
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
  validateOrcamento,
};
