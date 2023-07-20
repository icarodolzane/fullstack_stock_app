import { Component, ViewChild, OnInit } from '@angular/core';
import produtos from '../../assets/products/products';
import { Paginator } from 'primeng/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('paginator', { static: false }) paginator!: Paginator;

  estoqueFilter: boolean = false;
  categoriaFilter: boolean = false;
  produtoFilter: boolean = false;
  filtroDescricao: string = '';

  produtos = produtos;
  produtosFiltrados: any[] = [];
  cotacaoDolar?: number;;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obterCotacaoDolar();
  }
  onFilterChange(filterName: string, event: any) {
    switch (filterName) {
      case 'estoque':
        this.estoqueFilter = event.checked;
        // Implementar a lógica de filtro de estoque aqui
        break;
      case 'categoria':
        this.categoriaFilter = event.checked;
        // Implementar a lógica de filtro de categoria aqui
        break;
      case 'produto':
        this.produtoFilter = event.checked;
        // Implementar a lógica de filtro de produto aqui
        break;
      default:
        break;
    }
  }

  filtrarPorDescricao() {
    if (this.filtroDescricao.trim() === '') {
      this.produtosFiltrados = this.produtos; // Exibir todos os produtos se o filtro de descrição estiver vazio
    } else {
      this.produtosFiltrados = this.produtos.filter((produto: any) =>
        produto.descricao.toLowerCase().includes(this.filtroDescricao.toLowerCase())
      ); // Filtrar os produtos com base na descrição
    }
    this.paginator.changePage(0); // Redefinir a página atual do Paginator para a primeira página
  }

  obterCotacaoDolar() {
    const apiURL = 'https://api.exchangerate.host/latest?base=brl';

    this.http.get(apiURL).subscribe((data: any) => {
      console.log(data.rates.USD);
      this.cotacaoDolar = data.rates.USD;
    });
  }
}
