import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FilialService } from '../../services/filial.service';

@Component({
  selector: 'app-filial-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './filial-component.html',
  styleUrl: './filial-component.scss'
})
export class FilialComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  filialForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filialService: FilialService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.filialForm = this.fb.group({
      // Define os controles do formulário e suas validações
      coligada_id: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      razao_social: [''], // Campo opcional
      cnpj: ['',[Validators.pattern(/^\d{14}$/)]],
      inscricao_estadual: ['',[Validators.required, Validators.pattern(/^\d{9,14}$/)]],
      inscricao_municipal: ['',[Validators.required, Validators.pattern(/^\d{6,14}$/)]],   
      matriz: ['', [Validators.required]],     // Campo opcional
      ativo: [true],
      // Opcional: Adicione created_by se precisar enviar.
      // Por enquanto, vamos assumir que a API cuida disso.
      // created_by: [1, [Validators.required]] 
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.filialForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.filialForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.filialForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.filialService.create(this.filialForm.value).subscribe({
      next: (response) => {
        alert('Filial cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.filialForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Filial. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.filialForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}