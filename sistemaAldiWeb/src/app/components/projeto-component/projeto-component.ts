import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProjetoService } from '../../services/projeto.service';

@Component({
  selector: 'app-projeto-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './projeto-component.html',
  styleUrl: './projeto-component.scss'
})
export class ProjetoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  projetoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projetoService: ProjetoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.projetoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      organizacao_id: ['', [Validators.required]],
      contrato_id: ['', [Validators.required]],
      data_inicio: ['', [Validators.required]],
      data_fim_prevista: ['', [Validators.required]],
      data_fim_real: ['', [Validators.required]],
      valor_orcado: ['', [Validators.required]],
      valor_realizado: ['', [Validators.required]],
      percentual_conclusao: ['', [Validators.required]],
      status_id: ['', [Validators.required]],
      prioridade: ['', [Validators.required]],
      coligada_id: ['', [Validators.required]],
      filial_id: ['', [Validators.required]],
      gerente_id: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.projetoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.projetoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.projetoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.projetoService.create(this.projetoForm.value).subscribe({
      next: (response) => {
        alert('Projeto cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.projetoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Projeto. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.projetoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}