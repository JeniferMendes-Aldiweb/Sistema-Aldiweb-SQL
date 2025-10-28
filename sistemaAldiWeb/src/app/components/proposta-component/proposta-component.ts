import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PropostaService } from '../../services/proposta.service';

@Component({
  selector: 'app-proposta-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './proposta-component.html',
  styleUrl: './proposta-component.scss'
})
export class PropostaComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  propostaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private propostaService: PropostaService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.propostaForm = this.fb.group({
      // Define os controles do formulário e suas validações
      numero: ['', [Validators.required]],
      orcamento_id: ['', [Validators.required]],
      data_emissao: ['', [Validators.required]],
      data_validade: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor_total: ['', [Validators.required]],
      condicoes_pagamento: ['', [Validators.required]],
      prazo_entrega: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      status_id: ['', [Validators.required]],
      responsavel_id: ['', [Validators.required]],
      aprovada_em: ['', [Validators.required]],
      aprovada_por: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.propostaForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.propostaForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.propostaForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.propostaService.create(this.propostaForm.value).subscribe({
      next: (response) => {
        alert('Proposta cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.propostaForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Proposta. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.propostaForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}