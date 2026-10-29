import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LembreCadastroRoutingModule } from './lembre-cadastro-routing-module';
import { Cadastro } from './cadastro/cadastro';

@NgModule({
  declarations: [Cadastro],
  imports: [CommonModule, LembreCadastroRoutingModule],
})
export class LembreCadastroModule {}
