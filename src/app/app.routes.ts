// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { Error } from './pages/error/error';
import { SobreMi } from './pages/sobre-mi/sobre-mi';

export const routes: Routes = [
  { path: '', component: Bienvenida },

  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'bienvenida', component: Bienvenida },
  { path: 'sobre-mi', component: SobreMi },

  { path: '**', component: Error }
];