import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/atividade';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  // Método para criar um novo módulo.
  create(atividade: any): Observable<any> {
    return this.http.post(this.apiUrl, atividade );
  }
}
