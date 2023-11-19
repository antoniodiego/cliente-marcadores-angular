import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcadoresService } from '../marcadores.service';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements OnInit {

  idLivro: Number;

  marcadores: Array<any>; // [{id: 1 , nome: 'Teste '}, {id: 2, nome: 'Teste 2'}];

  constructor(private route: ActivatedRoute, private marcadoresService: MarcadoresService) {
    this.idLivro = Number(this.route.snapshot.params['idLivro']);
  }

  ngOnInit() {
    this.listar();
  }


  listar() {
    console.log("invocando listar");
    var obs = this.marcadoresService.listar(this.idLivro);
    obs.subscribe(dados => {
      this.marcadores = dados
      console.log("mudança");
    }
    );
    console.log("Após retorno listar");
  }
}
