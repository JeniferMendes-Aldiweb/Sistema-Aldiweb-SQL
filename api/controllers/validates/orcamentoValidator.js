const { body, validationResult } = require("express-validator");

const validateOrcamento = [
  // Regras de validação para os campos principais
  body("numero").notEmpty().withMessage("O número é obrigatório.")
  .isNumeric().withMessage('O campo numero deve conter apenas números.'),
  
  body("organizacao_id").notEmpty().withMessage("O organizacao_id é obrigatório.")
  .isInt().withMessage('O organizacao_id deve ser um número inteiro.'),

  body("contato_id").notEmpty().withMessage("O contato_id é obrigatório.")
  .isInt().withMessage('O contato_id deve ser um número inteiro.'),
  
  body("data_emissao").notEmpty().withMessage("A data de emissão deve estar em um formato válido (YYYY-MM-DD).")
  .isISO8601().withMessage('A data_emissao deve estar em formato válido (AAAA-MM-DD).'),

  body("data_validade").notEmpty().withMessage("A data de validade deve estar em um formato válido (YYYY-MM-DD).")
  .isISO8601().withMessage('A data_validade deve estar em formato válido (AAAA-MM-DD).'),

  body("titulo").notEmpty().withMessage("O título é obrigatório."),
  
  body("descricao").optional().isString().withMessage("A descrição é obrigatória."),
  
  body("valor_subtotal").notEmpty().withMessage("O valor subtotal deve ser um número positivo.")
  .isNumeric().withMessage('O campo valor_subtotal deve conter apenas números.'),
  
  body("valor_desconto").notEmpty().withMessage("O valor de desconto deve ser um número positivo.")
  .isNumeric().withMessage('O campo valor_desconto deve conter apenas números.'),
  
  body("percentual_desconto").notEmpty().withMessage("O percentual de desconto deve ser um número entre 0 e 100.")
  .isNumeric().withMessage('O campo percentual_desconto deve conter apenas números.'),
  
  body("valor_total").notEmpty().withMessage("O valor total deve ser um número positivo.")
  .isNumeric().withMessage('O campo valor_total deve conter apenas números.'),
  
  body("observacoes").optional().isString().withMessage("As observações devem ser um texto."),
  
  body("status_id").notEmpty().withMessage("O status_id é obrigatório.")
  .isInt().withMessage('O status_id deve ser um número inteiro.'),

  body("coligada_id").notEmpty().withMessage("A coligada_id é obrigatória.")
  .isInt().withMessage('O coligada_id deve ser um número inteiro.'),
  
  body("filial_id").notEmpty().withMessage("A filial_id é obrigatória.")
  .isInt().withMessage('O filial_id deve ser um número inteiro.'),
  
  body("responsavel_id").notEmpty().withMessage("O responsavel_id é obrigatório.")
  .isInt().withMessage('O responsavel_id deve ser um número inteiro.'),
  
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
