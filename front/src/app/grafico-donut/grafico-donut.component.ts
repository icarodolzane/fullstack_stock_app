import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styleUrls: ['./grafico-donut.component.css']
})
export class GraficoDonutComponent implements OnInit {
  public grafico: any;
  public options: any;
  public porCategoriaData: any[] = [];
  public porCategoriaLabels: any[] = [];

  constructor(public dashboardService: DashboardService) { }

  async ngOnInit(): Promise<void> {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    await this.vendasPorCategorias(); // Aguarda a conclusão para que os dados estejam disponíveis
    this.grafico = {
      labels: [
        this.porCategoriaLabels[0]?.descricao,
        this.porCategoriaLabels[1]?.descricao,
        this.porCategoriaLabels[2]?.descricao,
        this.porCategoriaLabels[3]?.descricao,
      ],
      datasets: [
        {
          data: [
            this.porCategoriaLabels[0]?.total,
            this.porCategoriaLabels[1]?.total,
            this.porCategoriaLabels[2]?.total,
            this.porCategoriaLabels[3]?.total,
          ],
          backgroundColor: [ documentStyle.getPropertyValue('--red-500'),documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500', )],
          hoverBackgroundColor: [ documentStyle.getPropertyValue('--red-500'),documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500', )]
        }
      ]
    };
    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

  vendasPorCategorias(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.dashboardService.getVendasPorCategoria().subscribe(
        (data: any) => {
          this.porCategoriaData = data.por_categoria;
          console.log(this.porCategoriaData);
          this.obterValoresCategorias();
          resolve(); // Resolve a promise quando os dados são carregados
        },
        (error) => {
          console.log('Ocorreu um erro:', error);
          reject(error); // Rejeita a promise se ocorrer um erro
        }
      );
    });
  }

  obterValoresCategorias() {
    const sortedArr = this.porCategoriaData.sort((a, b) => {
      return b.total - a.total;
    });

    const length = sortedArr.length;

    const primeiroMaior = length > 0 ? sortedArr[0].total : 0;
    const segundoMaior = length > 1 ? sortedArr[1].total : 0;
    const terceiroMaior = length > 2 ? sortedArr[2].total : 0;

    let outrosTotal = 0;
    for (let i = 3; i < length; i++) {
      outrosTotal += sortedArr[i].total;
    }
    const novoArray = [
      { descricao: sortedArr[0].descricao, total: primeiroMaior },
      { descricao: sortedArr[1].descricao, total: segundoMaior },
      { descricao: sortedArr[2].descricao, total: terceiroMaior },
      { descricao: "Outros", total: outrosTotal }
    ];

    this.porCategoriaLabels = novoArray;
  }

}
