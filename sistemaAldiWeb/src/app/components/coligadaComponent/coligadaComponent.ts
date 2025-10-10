import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ColigadaService } from '../../services/coligada.service';

@Component({
  selector: 'app-coligada-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './coligadaComponent.html',
  styleUrl: './coligadaComponent.scss'
})
export class ColigadaComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  coligadaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private coligadaService: ColigadaService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.coligadaForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      razao_social: [''], // Campo opcional
      cnpj: ['', [Validators.required]],
      inscricao_estadual: [''],     // Campo opcional
      inscricao_municipal: [''],     // Campo opcional
      ativo: [true],
      // Opcional: Adicione created_by se precisar enviar.
      // Por enquanto, vamos assumir que a API cuida disso.
      // created_by: [1, [Validators.required]] 
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.coligadaForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.coligadaForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.coligadaForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.coligadaService.create(this.coligadaForm.value).subscribe({
      next: (response) => {
        alert('Coligada cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.coligadaForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Coligada. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.coligadaForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}