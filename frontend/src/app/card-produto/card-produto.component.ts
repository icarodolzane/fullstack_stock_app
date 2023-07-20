import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnChanges {
  @Input() produto: any;
  @Input() cotacaoDolar?: number;
  valorDolar?: number;
  quantidadePedido: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cotacaoDolar'] && !changes['cotacaoDolar'].firstChange) {
      // Verifica se a propriedade cotacaoDolar foi alterada e não é o primeiro valor atribuído
      this.atualizarValorDolar();
    }
  }

  atualizarValorDolar(): void {
    // Verifica se a cotacaoDolar está definida antes de calcular o valor em dólar
    if (this.cotacaoDolar !== undefined) {
      this.valorDolar = this.produto.valor * this.cotacaoDolar;
    } else {
      this.valorDolar = 0;
    }
  }

  getValorDolar(): number | undefined {
    return this.valorDolar;
  }
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
