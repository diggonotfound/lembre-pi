import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class Cadastro {

  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  mostrarSenha: boolean = false;
  mostrarConfirmacao: boolean = false;

  mensagem: string = '';

  constructor(private router: Router) {}

  criarConta(): void {

    this.mensagem = '';

    if (
      !this.nome.trim() ||
      !this.email.trim() ||
      !this.senha ||
      !this.confirmarSenha
    ) {
      this.mensagem = 'Preencha todos os campos!';
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

    if (this.senha !== this.confirmarSenha) {
      this.mensagem = 'As senhas não são iguais!';
      return;
    }

    this.mensagem = 'Cadastro validado com sucesso!';

    setTimeout(() => {
      this.router.navigate(['/lembre-cadastro/entrar']);
    }, 1200);
  }

  avisarSocial(rede: string): void {
    this.mensagem = `Cadastro com ${rede} estará disponível em breve.`;
  }

}