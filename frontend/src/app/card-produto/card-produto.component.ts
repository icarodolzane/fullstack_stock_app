import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent {
  @Input() produto: any;
  quantidadePedido: number = 0;

  diminuirQuantidade(): void {
    if (this.quantidadePedido > 0) {
      this.quantidadePedido--;
    }
  }

  aumentarQuantidade(): void {
    this.quantidadePedido++;
  }

  getStatusClass(): string {
    if (this.produto.quantidade === 0 || this.quantidadePedido > this.produto.quantidade) {
      return 'vermelho';
    } else if (this.produto.quantidade - this.quantidadePedido <= 5) {
      return 'amarelo';
    } else {
      return 'verde';
    }
  }

  getStatusText(): string {
    if (this.produto.quantidade === 0 || this.quantidadePedido > this.produto.quantidade) {
      return 'Esgotado';
    } else if (this.produto.quantidade - this.quantidadePedido <= 5) {
      return 'Estoque baixo';
    } else {
      return 'Disponível';
    }
  }

}
