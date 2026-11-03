import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Cadastro } from './cadastro/cadastro';
import { Inicio } from './inicio/inicio';
import { Entrar } from './entrar/entrar';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'cadastro', component: Cadastro },
  { path: 'entrar', component: Entrar },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LembreCadastroRoutingModule {}