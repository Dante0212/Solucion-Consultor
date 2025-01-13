import { Routes } from '@angular/router';
import { TrabajadoresPage } from './pages/trabajadores/trabajadores.page'; // Ajusta el path según tu estructura

export const routes: Routes = [
  { path: '', redirectTo: 'trabajadores', pathMatch: 'full' },
  { path: 'trabajadores', component: TrabajadoresPage },
  {
    path: 'tabla-seleccion',
    loadComponent: () => import('./pages/tabla-seleccion/tabla-seleccion.page').then( m => m.TablaSeleccionPage)
  },
  {
    path: 'grilla-datos',
    loadComponent: () => import('./pages/grilla-datos/grilla-datos.page').then( m => m.GrillaDatosPage)
  },
  {
    path: 'filtros',
    loadComponent: () => import('./pages/filtros/filtros.page').then( m => m.FiltrosPage)
  },
];

