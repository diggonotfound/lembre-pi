import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  styleUrl: './cadastro.scss',
  templateUrl: './cadastro.html',
})
export class Cadastro {

  nome = '';
  descricao = '';
  mensagem = '';

  salvar(): void {
    if (!this.nome.trim()) return;
    this.mensagem = 'Projeto "${this.nome.trim()}" validado!';
  }

  limpar(): void {
    this.nome = '';
    this.descricao = '';
    this.mensagem = '';
  }
}
