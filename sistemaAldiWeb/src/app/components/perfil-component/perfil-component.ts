import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PerfilService } from '../../services/perfil.service';


@Component({
  selector: 'app-perfil-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './perfil-component.html',
  styleUrl: './perfil-component.scss'
})
export class PerfilComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  perfilForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      modulo_id: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.perfilForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.perfilForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.perfilForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.perfilService.create(this.perfilForm.value).subscribe({
      next: (response) => {
        alert('Perfil cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.perfilForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Perfil. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.perfilForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}