import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-usuario-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuario-component.html',
  styleUrl: './usuario-component.scss'
})
export class UsuarioComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  usuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      // Define os controles do formulário e suas validações

      pessoa_id: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha_hash: ['', [Validators.required]],
      ultimo_acesso: ['', [Validators.required]],
      tentativas_login: ['', [Validators.required]],
      bloqueado: ['', [Validators.required]],
      bloqueado_em: ['', [Validators.required]],
      token_recuperacao: ['', [Validators.required]],
      token_expiracao: ['', [Validators.required]],
      ativo: [true],
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.usuarioForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.usuarioForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.usuarioForm.value);

    // Chama o método do serviço para salvar os dados
    this.usuarioService.create(this.usuarioForm.value).subscribe({
      next: (response) => {
        alert('Usuário cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.usuarioForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
        this.usuarioForm.reset({ bloqueado: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Usuário. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.usuarioForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}