import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nomeUsuario = 'Nome do Usuário';
  logoPath = './assets/logo.png';

  sair() {
    console.log('saiu');

  }
}
