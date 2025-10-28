import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HabilidadeService } from '../../services/habilidade.service';

@Component({
  selector: 'app-habilidade-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './habilidade-component.html',
  styleUrl: './habilidade-component.scss'
})
export class HabilidadeComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  habilidadeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private habilidadeService: HabilidadeService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.habilidadeForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.habilidadeForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.habilidadeForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.habilidadeForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.habilidadeService.create(this.habilidadeForm.value).subscribe({
      next: (response) => {
        alert('Habilidade cadastrada com sucesso!');
        console.log('Resposta da API:', response);
        this.habilidadeForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Habilidade. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.habilidadeForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}