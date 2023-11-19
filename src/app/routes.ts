import { Routes } from "@angular/router";
import { LivrosComponent } from "./livros/livros.component";
import { MarcadoresComponent } from "./marcadores/marcadores.component";

const routeConfig: Routes = [
    {
      path: '',
      component: LivrosComponent,
      //title: 'Home page'
    },
    {
      path: 'details/:id',
      component: MarcadoresComponent,
    //  title: 'Home details'
    }
  ];
  
  export default routeConfig;