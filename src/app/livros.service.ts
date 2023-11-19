import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
 url_livros = 'http://localhost:8080/livros/';

  constructor(private http: HttpClient) { }

  listar() {
    console.log("listar");
    var retorno = this.http.get<any[]>(`${this.url_livros}`);
    console.log("retornou: "+retorno);
    
    return retorno;
  }
}
