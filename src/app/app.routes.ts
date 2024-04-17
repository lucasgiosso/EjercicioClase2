import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegisterComponent } from './componentes/register/register.component';

export const routes: Routes = 
[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorComponent }
];

// [
//     { path: 'bienvenido', loadComponent: ()=> import('./componentes/bienvenido/bienvenido.component').then(c => c.BienvenidoComponent)},
//     { path: 'login', loadComponent: ()=> import('./componentes/login/login.component').then(c => c.LoginComponent) },
//     { path: 'error', loadComponent: ()=> import('./componentes/error/error.component').then(c => c.ErrorComponent) },
//     { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '**', component: ErrorComponent }
// ];


