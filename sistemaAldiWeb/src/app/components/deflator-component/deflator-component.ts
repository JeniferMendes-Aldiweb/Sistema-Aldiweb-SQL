import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DeflatorService } from '../../services/deflator.service';


@Component({
  selector: 'app-deflator-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './deflator-component.html',
  styleUrl: './deflator-component.scss'
})
export class DeflatorComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  deflatorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private deflatorService: DeflatorService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.deflatorForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      fonte: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.deflatorForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.deflatorForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.deflatorForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.deflatorService.create(this.deflatorForm.value).subscribe({
      next: (response) => {
        alert('deflator cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.deflatorForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Deflator. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.deflatorForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}