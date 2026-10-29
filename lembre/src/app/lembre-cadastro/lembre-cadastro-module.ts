import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LembreCadastroRoutingModule } from './lembre-cadastro-routing-module';
import { Cadastro } from './cadastro/cadastro';

@NgModule({
  declarations: [Cadastro],
  imports: [CommonModule, LembreCadastroRoutingModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class LembreCadastroModule {}
