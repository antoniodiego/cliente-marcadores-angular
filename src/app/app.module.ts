import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { LivrosService } from './livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule
  ],
  providers: [LivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
