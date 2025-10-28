import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FuncaoService } from '../../services/funcao.service';

@Component({
  selector: 'app-funcao-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './funcao-component.html',
  styleUrl: './funcao-component.scss'
})
export class FuncaoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  funcaoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private funcaoService: FuncaoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.funcaoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.funcaoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.funcaoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.funcaoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.funcaoService.create(this.funcaoForm.value).subscribe({
      next: (response) => {
        alert('Função cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.funcaoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Função. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.funcaoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}