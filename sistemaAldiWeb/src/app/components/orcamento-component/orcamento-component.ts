import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrcamentoService } from '../../services/orcamento.service';


@Component({
  selector: 'app-orcamento-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './orcamento-component.html',
  styleUrl: './orcamento-component.scss'
})
export class OrcamentoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  orcamentoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orcamentoService: OrcamentoService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.orcamentoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      numero: ['', [Validators.required]],
      organizacao_id: ['', [Validators.required]],
      contato_id: ['', [Validators.required]],
      data_emissao: ['', [Validators.required]],
      data_validade: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor_subtotal: ['', [Validators.required]],
      valor_desconto: ['', [Validators.required]],
      percentual_desconto: ['', [Validators.required]],
      valor_total: ['', [Validators.required]],
      observacoes: ['', [Validators.required]],
      status_id: ['', [Validators.required]],
      coligada_id: ['', [Validators.required]],
      filial_id: ['', [Validators.required]],
      responsavel_id: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.orcamentoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.orcamentoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.orcamentoForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.orcamentoService.create(this.orcamentoForm.value).subscribe({
      next: (response) => {
        alert('Orçamento cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.orcamentoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Orçamento. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.orcamentoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}