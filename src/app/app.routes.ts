import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/bienvenida/bienvenida').then((m) => m.Bienvenida) },

  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  { path: 'registro', loadComponent: () => import('./pages/registro/registro').then((m) => m.Registro) },
  { path: 'bienvenida', loadComponent: () => import('./pages/bienvenida/bienvenida').then((m) => m.Bienvenida) },
  { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil').then((m) => m.Perfil) },

  { path: '**', loadComponent: () => import('./pages/error/error').then((m) => m.Error) }
];