import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.scss'
})
export class ProdutoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  produtoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.produtoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      valor_unitario: ['', [Validators.required]],
      estoque_minimo: ['', [Validators.required]],
      estoque_atual: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.produtoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.produtoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.produtoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.produtoService.create(this.produtoForm.value).subscribe({
      next: (response) => {
        alert('Produto cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.produtoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Produto. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.produtoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}