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
      this.servicolivro.listar().subscribe(dados => this.livros = dados);
  }

}
