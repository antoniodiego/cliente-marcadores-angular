import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Array<any>; // [{id: 1 , nome: 'Teste '}, {id: 2, nome: 'Teste 2'}];

  constructor(private servicolivro: LivrosService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    console.log("invocando listar");
    var retorno = this.servicolivro.listar();
    retorno.subscribe(dados => { this.livros = dados
    console.log("mudança");
    }
    );
    console.log("Após retorno listar");
    console.log("retorno: " + retorno);

  }

}
