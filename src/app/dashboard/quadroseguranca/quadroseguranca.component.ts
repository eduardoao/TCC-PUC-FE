import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { SegurancaService } from 'src/app/services/seguranca.service';

@Component({
  selector: 'app-quadroseguranca',
  templateUrl: './quadroseguranca.component.html',
  styleUrls: ['./quadroseguranca.component.css']
})
export class QuadrosegurancaComponent implements OnInit {

  chart: any;
  canvas:any;
  ctx: any;
  ano: number;
 
  constructor(private segurancaService: SegurancaService) {}
 
  ngOnInit() {
    var hoje = new Date();
    var yyyy = hoje.getFullYear();
    this.ano = yyyy;

    this.canvas = document.getElementById('myChartS');
    this.ctx = this.canvas.getContext('2d');

    this.segurancaService.retornaHomicidioAnoCorrente()
      .subscribe((res) => {

        let numeroTotal = res.map(res => res.numeroTotal);
        let ano = res.map(res => res.mes);
       
        let chart = new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: ano,
            datasets: [
              {
                data: numeroTotal,
                borderColor: '#2fba9f',
                fill: false
              }             
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

        console.log(chart)
        
      });
  }

}
