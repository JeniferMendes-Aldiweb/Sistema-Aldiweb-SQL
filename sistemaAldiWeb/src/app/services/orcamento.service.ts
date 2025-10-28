import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/orcamento';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  // Método para criar um novo módulo.
  // O tipo 'any' pode ser substituído por uma interface `Iorcamento` no futuro.
  create(orcamento: any): Observable<any> {
    return this.http.post(this.apiUrl, orcamento );
  }
}

