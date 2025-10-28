// src/app/models/pessoa.model.ts
export interface Pessoa {
  // Propriedades que vêm do formulário e são enviadas para a API
  numero: string;
  proposta_id: string;
  data_assinatura: string;
  data_inicio: number;
  data_fim: number;
  titulo: string;
  descricao: string;
  valor_total: string;
  condicoes_pagamento: string;
  clausulas: string;
  observacoes: string;
  arquivo_url: string;
  status_id: string;
  responsavel_id: string;
  versao: string;
  contrato_anterior_id: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
