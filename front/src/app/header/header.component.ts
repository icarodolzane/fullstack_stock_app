import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit(): void {
      this.items = [
        {
          label: 'Início',
          icon: 'pi pi-fw pi-home',
          routerLink: ['/home']
        },
        {
          label: 'Usuários',
          icon: 'pi pi-fw pi-user',
          routerLink: ['/usuarios']
        },
        {
          label: 'Cadastrar Usuário',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/cadastro']
        },
        {
          label: 'Cadastrar Categoria',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/cadastro-categoria']
        },
        {
          label: 'Cadastrar Produto',
          icon: 'pi pi-fw pi-plus',
          routerLink: ['/cadastro-produto']
        },
        {
          label: 'Produtos',
          icon: 'pi pi-fw pi-list',
          routerLink: ['/lista-produtos']
        },
        {
          label: 'Vendas',
          icon: 'pi pi-fw pi-list',
          routerLink: ['/lista-vendas']
        },
        {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-chart-bar',
          routerLink: ['/dashboard']
        },
        {
          separator: true
        },
        {
          label: 'Sair',
          icon: 'pi pi-fw pi-power-off',
          routerLink: ['/login']
      }

      ]
  }
  constructor(private router: Router) { }

}
