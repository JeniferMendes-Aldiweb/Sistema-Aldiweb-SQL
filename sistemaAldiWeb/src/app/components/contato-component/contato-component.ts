import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-contato-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contato-component.html',
  styleUrl: './contato-component.scss'
})
export class ContatoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  contatoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      organizacao_id: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      departamento: ['', [Validators.required]],
      principal: [true],
      observacoes: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.contatoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.contatoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.contatoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.contatoService.create(this.contatoForm.value).subscribe({
      next: (response) => {
        alert('Contato cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.contatoForm.reset({ ativo: true, ordem: 0 }); 
        this.contatoForm.reset({ principal: true, ordem: 0 }); 
      },
      error: (err) => {
        alert('Erro ao cadastrar Contato. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.contatoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}
