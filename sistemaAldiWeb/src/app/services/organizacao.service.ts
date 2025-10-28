import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService  {
  
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/organizacao';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  create(organizacao: any): Observable<any> {
    return this.http.post(this.apiUrl, organizacao );
  }
}