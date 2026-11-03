import { Component } from '@angular/core';

@Component({
  selector: 'app-entrar',
  standalone: false,
  templateUrl: './entrar.html',
  styleUrl: './entrar.scss'
})
export class Entrar {

  email: string = '';
  senha: string = '';

  mostrarSenha: boolean = false;

  mensagem: string = '';

  entrar(): void {

    this.mensagem = '';

    if (!this.email.trim() || !this.senha) {
      this.mensagem = 'Preencha seu e-mail e sua senha!';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.mensagem = 'Digite um e-mail válido!';
      return;
    }

    if (this.senha.length < 6) {
      this.mensagem = 'A senha deve ter pelo menos 6 caracteres!';
      return;
    }

    this.mensagem = 'Dados validados! O login será conectado ao sistema em breve.';
  }

  avisarSocial(rede: string): void {
    this.mensagem = `O acesso com ${rede} estará disponível em breve.`;
  }

}