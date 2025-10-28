import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrganizacaoService } from '../../services/organizacao.service';
@Component({
  selector: 'app-organizacao-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './organizacao-component.html',
  styleUrl: './organizacao-component.scss'
})
export class OrganizacaoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  organizacaoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private organizacaoService: OrganizacaoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.organizacaoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      tipo: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      nome_fantasia: ['', [Validators.required]],
      razao_social: ['', [Validators.required]],
      cnpj_cpf: ['', [Validators.required]],
      inscricao_estadual: ['', [Validators.required]],
      inscricao_municipal: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      site: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      coligada_id: ['', [Validators.required]],
      filial_id: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.organizacaoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.organizacaoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.organizacaoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.organizacaoService.create(this.organizacaoForm.value).subscribe({
      next: (response) => {
        alert('Endereço cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.organizacaoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Endereço. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.organizacaoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}