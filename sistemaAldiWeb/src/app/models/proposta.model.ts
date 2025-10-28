// src/app/models/pessoa.model.ts
export interface Pessoa {
  // Propriedades que vêm do formulário e são enviadas para a API
  numero: string;
  orcamento_id: string;
  data_emissao: string;
  data_validade: number;
  titulo: string;
  descricao: string;
  valor_total: string;
  condicoes_pagamento: string;
  prazo_entrega: string;
  observacoes: string;
  status_id: string;
  responsavel_id: string;
  aprovada_em: string;
  aprovada_por: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
