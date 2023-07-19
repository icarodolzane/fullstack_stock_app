import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
  onSubmit() {
    // Lógica de autenticação
    if (this.username === 'admin' && this.password === 'admin123') {
      console.log('Login bem-sucedido');
      // Redirecionar para a página principal ou fazer outras ações necessárias
    } else {
      console.log('Login inválido');
      // Exibir mensagem de erro ou fazer outras ações necessárias
    }
  }
}
