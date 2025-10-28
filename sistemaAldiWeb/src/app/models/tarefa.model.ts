export interface Tarefa {
  // Propriedades que vêm do formulário e são enviadas para a API
  atividade_id: string;
  codigo: string;
  titulo: string;
  descricao: string;
  ordem: string;
  data_inicio: number;
  data_fim_prevista: string;
  data_fim_real: string;
  horas_estimadas: string;
  horas_realizadas: string;
  prioridade: string;
  percentual_conclusao: string;
  status_id: string;
  tarefa_predecessora_id: string;
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
