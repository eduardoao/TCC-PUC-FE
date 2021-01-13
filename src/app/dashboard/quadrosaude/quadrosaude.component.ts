import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { HeathService } from 'src/app/services/saude.service';

@Component({
  selector: 'app-quadrosaude',
  templateUrl: './quadrosaude.component.html',
  styleUrls: ['./quadrosaude.component.css']
})
export class QuadrosaudeComponent implements OnInit {

  chart: any;
  canvas:any;
  ctx: any;
  ano: number;
 
  constructor(private saudeService: HeathService) {}
 
  ngOnInit() {
    var hoje = new Date();
    var yyyy = hoje.getFullYear();
    this.ano = yyyy;

    this.canvas = document.getElementById('myChartSa');
    this.ctx = this.canvas.getContext('2d');

    this.saudeService.retornaSaudeAnoCorrente()
      .subscribe((res) => {

        let numeroTotal = res.map(res => res.numeroTotal);
        let mes = res.map(res => res.mes);
       
        let chart = new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: mes,
            datasets: [
              {
                data: numeroTotal,
                borderColor: '#2fbaAA',
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
