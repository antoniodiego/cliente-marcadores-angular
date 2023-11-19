import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcadoresService {
  url_livros = 'http://localhost:8080/marcadores/';

  constructor(private cliente: HttpClient) {

  }

  listar(id:Number) {
    var retorno = this.cliente.get<any[]>(`${this.url_livros+id}`);
    return retorno;
  }
}
