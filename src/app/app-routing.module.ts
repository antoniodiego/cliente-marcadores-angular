import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { MarcadoresComponent } from './marcadores/marcadores.component';

const routes: Routes = [
  { path: 'livros', component: LivrosComponent },
  { path: 'marcadores', component: MarcadoresComponent },
  { path: '', redirectTo: '/livros', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
