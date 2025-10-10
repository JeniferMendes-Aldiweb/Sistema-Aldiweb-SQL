import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
} )
export class PessoaService {
  private apiUrl = 'http://localhost:3000/api/pessoas';

  constructor(private http: HttpClient ) { }

  cadastrar(pessoa: Pessoa): Observable<any> {
    return this.http.post(this.apiUrl, pessoa );
  }
}
