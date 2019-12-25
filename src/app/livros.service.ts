import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
 url_livros = 'http://10.0.0.19:8080/livro';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url_livros}`);
  }
}
