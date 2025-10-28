import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicoService } from '../../services/servico.service';

@Component({
  selector: 'app-servico-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './servico-component.html',
  styleUrl: './servico-component.scss'
})
export class ServicoComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  servicoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicoService: ServicoService
  ) { }

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.servicoForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      valor_hora: ['', [Validators.required]],
      valor_unitario: ['', [Validators.required]],
      duracao_padrao_horas: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.servicoForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.servicoForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.servicoForm.value);

    // Chama o método do serviço para salvar os dados
    this.servicoService.create(this.servicoForm.value).subscribe({
      next: (response) => {
        alert('servico cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.servicoForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Produto. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.servicoForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}