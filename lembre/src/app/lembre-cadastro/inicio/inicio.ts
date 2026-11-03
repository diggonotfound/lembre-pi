import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

  mensagemSocial = '';

  avisarSocial(rede: string): void {
    this.mensagemSocial =
      `O acesso com ${rede} será disponibilizado em breve.`;
  }

}