import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tarefa-component.html',
  styleUrl: './tarefa-component.scss'
})
export class TarefaComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  tarefaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService
  ) { }

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      // Define os controles do formulário e suas validações

      atividade_id: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      ordem: ['', [Validators.required]],
      data_inicio: ['', [Validators.required]],
      data_fim_prevista: ['', [Validators.required]],
      data_fim_real: ['', [Validators.required]],
      horas_estimadas: ['', [Validators.required]],
      horas_realizadas: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      percentual_conclusao: ['', [Validators.required]],
      status_id: ['', [Validators.required]],
      tarefa_predecessora_id: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.tarefaForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.tarefaForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.tarefaForm.value);

    // Chama o método do serviço para salvar os dados
    this.tarefaService.create(this.tarefaForm.value).subscribe({
      next: (response) => {
        alert('Tarefa cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.tarefaForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Tarefa. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.tarefaForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}