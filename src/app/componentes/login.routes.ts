import { Routes } from '@angular/router';

export const routes: Routes = [

{ path: 'bienvenido', loadComponent: ()=> import('./bienvenido/bienvenido.component').then(c => c.BienvenidoComponent)},
  { path: 'error', loadComponent: ()=> import('./error/error.component').then(c => c.ErrorComponent) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];