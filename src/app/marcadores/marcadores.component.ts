import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements OnInit {
 
  idLivro: Number;

  constructor(private route:ActivatedRoute) {
    this.idLivro = Number(this.route.snapshot.params['idLivro']);
  }

  ngOnInit() {
  }

  @Input()
  set id(idLivro: Number) {
    this.idLivro = idLivro;
  }
}
