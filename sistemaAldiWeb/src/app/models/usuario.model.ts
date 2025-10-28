export interface Usuario {
  // Propriedades que vêm do formulário e são enviadas para a API
  pessoa_id: string;
  username: string;
  email: string;
  senha_hash: string;
  ultimo_acesso: string;
  tentativas_login: number;
  bloqueado: string;
  bloqueado_em: string;
  token_recuperacao: string;
  token_expiracao: string;
  ativo: boolean;
  created_by: number;

  // Propriedades que a API retorna, mas não enviamos no cadastro
  readonly id?: number; // 'readonly' pois não devemos alterá-lo no frontend
  readonly created_at?: string | Date;
  readonly updated_at?: string | Date;
  readonly updated_by?: number;
  readonly deleted_at?: string | Date | null;
}
