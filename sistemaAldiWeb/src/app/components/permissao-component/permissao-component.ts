import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PermissaoService } from '../../services/permissao.service';


@Component({
  selector: 'app-permissao-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './permissao-component.html',
  styleUrl: './permissao-component.scss'
})
export class PermissaoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  permissaoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private permissaoService: PermissaoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.permissaoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      modulo_id: ['', [Validators.required]],
      recurso: ['', [Validators.required]],
      acao: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.permissaoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.permissaoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.permissaoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.permissaoService.create(this.permissaoForm.value).subscribe({
      next: (response) => {
        alert('Permissão cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.permissaoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Permissão. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.permissaoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}