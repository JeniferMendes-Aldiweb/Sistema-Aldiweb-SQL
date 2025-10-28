import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AtividadeService } from '../../services/atividade.service';

@Component({
  selector: 'app-atividade-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './atividade-component.html',
  styleUrl: './atividade-component.scss'
})
export class AtividadeComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  atividadeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private atividadeService: AtividadeService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.atividadeForm = this.fb.group({
      // Define os controles do formulário e suas validações

      projeto_id: ['', [Validators.required]],
      projeto_fase_id: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      ordem: ['', [Validators.required]],
      data_inicio: ['', [Validators.required]],
      data_fim_prevista: ['', [Validators.required]],
      data_fim_real: ['', [Validators.required]],
      horas_estimadas: ['', [Validators.required]],
      horas_realizadas: ['', [Validators.required]],
      percentual_conclusao: ['', [Validators.required]],
      status_id: ['', [Validators.required]],
      responsavel_id: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.atividadeForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.atividadeForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.atividadeForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.atividadeService.create(this.atividadeForm.value).subscribe({
      next: (response) => {
        alert('Atividade cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.atividadeForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Atividade. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.atividadeForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}