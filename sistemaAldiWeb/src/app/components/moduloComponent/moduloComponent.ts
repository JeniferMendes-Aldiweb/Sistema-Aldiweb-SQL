import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModuloService } from '../../services/modulo.service';

@Component({
  selector: 'app-modulo-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './moduloComponent.html',
  styleUrl: './moduloComponent.scss'
})
export class ModuloComponent implements OnInit {
  // Declara a propriedade que vai guardar o formulário
  moduloForm!: FormGroup;

  // Injeta o FormBuilder (para criar o formulário) e o ModuloService (para salvar)
  constructor(
    private fb: FormBuilder,
    private moduloService: ModuloService
  ) {}

  // ngOnInit é o lugar perfeito para inicializar o formulário
  ngOnInit(): void {
    this.moduloForm = this.fb.group({
      // Define os controles do formulário e suas validações
      codigo: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: [''], // Campo opcional
      icone: [''],     // Campo opcional
      ordem: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      ativo: [true],
      // Opcional: Adicione created_by se precisar enviar.
      // Por enquanto, vamos assumir que a API cuida disso.
      // created_by: [1, [Validators.required]] 
    });
  }

  // Função chamada quando o formulário é enviado
  onSubmit(): void {
    // Para o envio se o formulário for inválido
    if (this.moduloForm.invalid) {
      // Marca todos os campos como "tocados" para exibir as mensagens de erro
      this.moduloForm.markAllAsTouched();
      return;
    }

    console.log('Dados a serem enviados:', this.moduloForm.value);
    
    // Chama o método do serviço para salvar os dados
    this.moduloService.create(this.moduloForm.value).subscribe({
      next: (response) => {
        alert('Módulo cadastrado com sucesso!');
        console.log('Resposta da API:', response);
        this.moduloForm.reset({ ativo: true, ordem: 0 }); // Limpa o formulário, mantendo valores padrão
      },
      error: (err) => {
        alert('Erro ao cadastrar Módulo. Verifique o console.');
        console.error('Erro da API:', err);
      }
    });
  }

  // Função auxiliar para verificar se um campo está inválido e foi tocado
  isInvalid(fieldName: string): boolean {
    const control = this.moduloForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}