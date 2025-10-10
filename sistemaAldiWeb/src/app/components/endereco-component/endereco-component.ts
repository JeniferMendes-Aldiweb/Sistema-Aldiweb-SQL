import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-endereco-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './endereco-component.html',
  styleUrl: './endereco-component.scss'
})
export class EnderecoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  enderecoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private enderecoService: EnderecoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.enderecoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: [''], // Campo opcional
      bairro: ['', [Validators.required]],
      cidade: [''],     // Campo opcional
      estado: [''],     // Campo opcional
      pais: ['', [Validators.required]],     // Campo opcional
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]]
      // Opcional: Adicione created_by se precisar enviar.
      // Por enquanto, vamos assumir que a API cuida disso.
      // created_by: [1, [Validators.required]] 
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.enderecoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.enderecoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.enderecoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.enderecoService.create(this.enderecoForm.value).subscribe({
      next: (response) => {
        alert('Endereço cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.enderecoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Endereço. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.enderecoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}