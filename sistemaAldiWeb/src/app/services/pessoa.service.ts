import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
} )
export class PessoaService {
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/pessoa';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  // Método para criar um novo módulo.
  // O tipo 'any' pode ser substituído por uma interface `Ipessoa` no futuro.
  create(pessoa: any): Observable<any> {
    return this.http.post(this.apiUrl, pessoa );
  }
}

