import { Routes } from '@angular/router';
import { DetalhesUnidadeComponent } from './paginas/detalhes-unidade/detalhes-unidade';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./paginas/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: '', 
    loadComponent: () => import('./componentes/unidades/unidades.component').then(m => m.UnidadesComponent) 
  },
  { 
    path: 'detalhes-unidade/:id', 
    loadComponent: () => import('./paginas/detalhes-unidade/detalhes-unidade').then(m => m.DetalhesUnidadeComponent) 
  }
];