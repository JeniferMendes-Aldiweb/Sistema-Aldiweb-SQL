import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pessoaComponent.html',
  styleUrl: './pessoaComponent.scss'
})
export class PessoaComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  pessoaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      cpf: ['',[Validators.required, Validators.pattern(/^\d{11}$/)]],
      rg: ['',[Validators.required, Validators.pattern(/^\d{9,11}$/)]],
      data_nascimento: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['',[Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      celular: ['',[Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      foto_url: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      coligada_id: ['', [Validators.required]],
      filial_id: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.pessoaForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.pessoaForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.pessoaForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.pessoaService.create(this.pessoaForm.value).subscribe({
      next: (response) => {
        alert('Pessoa cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.pessoaForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Pessoa. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.pessoaForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}