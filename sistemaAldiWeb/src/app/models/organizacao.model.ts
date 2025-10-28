export interface Organizacao {
  // Propriedades que vêm do formulário e são enviadas para a API
  tipo: string;
  codigo: string;
  nome_fantasia: string;
  razao_social: string;
  cnpj_cpf: string;
  inscricao_estadual: string;
  inscricao_municipal: string;
  email: string;
  telefone: string;
  site: string;
  observacoes: string;
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
