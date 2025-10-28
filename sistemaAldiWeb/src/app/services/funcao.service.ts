import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/funcao';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  create(funcao: any): Observable<any> {
    return this.http.post(this.apiUrl, funcao );
  }
}

