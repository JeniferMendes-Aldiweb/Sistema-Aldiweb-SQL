import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilialService {
  
  // URL base da sua API. Mantenha em um só lugar para fácil manutenção.
  private apiUrl = 'http://localhost:3000/api/filial';

  // Injeta o HttpClient do Angular
  constructor(private http: HttpClient ) { }

  create(filial: any): Observable<any> {
    return this.http.post(this.apiUrl, filial );
  }
}