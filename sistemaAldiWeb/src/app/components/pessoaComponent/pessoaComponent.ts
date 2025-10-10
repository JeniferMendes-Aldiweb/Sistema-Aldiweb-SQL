import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-pessoa',
imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pessoaComponent.html',
  styleUrl: './pessoaComponent.scss'
})
export class PessoaComponent {

  
 cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private pessoaService: PessoaService) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['']
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const novaPessoa: Pessoa = this.cadastroForm.value;
      this.pessoaService.cadastrar(novaPessoa).subscribe({
        next: () => {
          alert('Pessoa cadastrada com sucesso!');
          this.cadastroForm.reset();
        },
        error: (err) => {
          alert('Ocorreu um erro ao cadastrar.');
          console.error('Erro da API:', err);
        }
      });
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  }
}