export interface Deflator {
  // Propriedades que vêm do formulário e são enviadas para a API
  codigo: string;
  nome: string;
  descricao: string;
  modulo_id: string;
  nivel: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
