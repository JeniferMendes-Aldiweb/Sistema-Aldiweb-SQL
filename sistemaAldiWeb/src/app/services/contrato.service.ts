import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/contrato';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  // Método para criar um novo módulo.
  // O tipo 'any' pode ser substituído por uma interface `Icontrato` no futuro.
  create(contrato: any): Observable<any> {
    return this.http.post(this.apiUrl, contrato );
  }
}