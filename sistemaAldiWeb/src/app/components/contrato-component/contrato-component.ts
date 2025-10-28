import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-contrato-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contrato-component.html',
  styleUrl: './contrato-component.scss'
})
export class ContratoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  contratoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contratoService: ContratoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.contratoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      numero: ['', [Validators.required]],
      proposta_id: ['', [Validators.required]],
      data_assinatura: ['', [Validators.required]],
      data_inicio: ['', [Validators.required]],
      data_fim: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor_total: ['', [Validators.required]],
      condicoes_pagamento: ['', [Validators.required]],
      clausulas: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      arquivo_url: ['', [Validators.required]],
      status_id: ['', [Validators.required]],
      responsavel_id: ['', [Validators.required]],
      versao: ['', [Validators.required]],
      contrato_anterior_id: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.contratoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.contratoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.contratoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.contratoService.create(this.contratoForm.value).subscribe({
      next: (response) => {
        alert('contrato cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.contratoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Contrato. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.contratoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}