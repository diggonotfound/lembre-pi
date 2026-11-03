import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatCardModule } from '@angular/material/card';

import { LembreCadastroRoutingModule }
  from './lembre-cadastro-routing-module';

import { Cadastro } from './cadastro/cadastro';
import { Inicio } from './inicio/inicio';
import { Entrar } from './entrar/entrar';

@NgModule({
  declarations: [
    Cadastro,
    Inicio,
    Entrar
  ],
  imports: [
    CommonModule,
  FormsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  LembreCadastroRoutingModule
  ]
})
export class LembreCadastroModule {}