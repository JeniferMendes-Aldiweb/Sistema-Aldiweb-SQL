import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/usuario';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  create(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario );
  }
}