// src/app/models/pessoa.model.ts
export interface Pessoa {
  // Propriedades que vêm do formulário e são enviadas para a API
  codigo: string;
  nome: string;
  cpf: string; // O '?' torna a propriedade opcional
  rg: string;
  data_nascimento: number;
  email: string;
  telefone: string;
  celular: string;
  foto_url: string;
  tipo: string;
  coligada_id: string;
  filial_id: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
