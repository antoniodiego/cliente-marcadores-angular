//Modulos
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { LivrosService } from './livros.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    LoginFormComponent,
    MarcadoresComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
