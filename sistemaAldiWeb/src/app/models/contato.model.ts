    export interface Contato {
  // Propriedades que vêm do formulário e são enviadas para a API
  organizacao_id: string;
  nome: string;
  email: string;
  telefone: string;
  celular: string;
  departamento: string;
  principal: boolean;
  observacoes: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
