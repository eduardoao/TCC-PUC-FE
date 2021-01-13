
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EducationService } from 'src/app/services/educacao.service';


@Component({
  selector: 'app-quadroeducacao',
  templateUrl: './quadroeducacao.component.html',
  styleUrls: ['./quadroeducacao.component.css']
})
export class QuadroeducacaoComponent implements OnInit {
 
  chart: any;
  canvas:any;
  ctx: any;
 
  constructor(private educationService: EducationService) {}
 
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    this.educationService.retornaEducacaoCorrente()
      .subscribe((res) => {

        let numeroTotal = res.map(res => res.numeroTotal);
        let ano = res.map(res => res.ano);
       
        let chart = new Chart(this.ctx, {
          type: 'line',
          data: {
            labels: ano,
            datasets: [
              {
                data: numeroTotal,
                borderColor: '#3cba9f',
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
