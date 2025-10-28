// src/app/models/pessoa.model.ts
export interface Pessoa {
  // Propriedades que vêm do formulário e são enviadas para a API
  numero: string;
  organizacao_id: string;
  contato_id: string; // O '?' torna a propriedade opcional
  data_emissao: string;
  data_validade: number;
  titulo: string;
  descricao: string;
  valor_subtotal: string;
  valor_desconto: string;
  percentual_desconto: string;
  valor_total: string;
  observacoes: string;
  status_id: string;
  coligada_id: string;
  filial_id: string;
  responsavel_id: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
