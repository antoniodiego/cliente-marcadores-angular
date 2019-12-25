import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model = new Usuario(1, 'Teste', 'TEste');
  submitted =false;

  onSubmit(){this.submitted = true;}
  
  constructor() { }

  ngOnInit() {
  }

}
