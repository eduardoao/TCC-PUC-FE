import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { AgmCoreModule } from '@agm/core';

import { QuadrosegurancaComponent } from './quadroseguranca/quadroseguranca.component';
import { QuadroeducacaoComponent } from './quadroeducacao/quadroeducacao.component';
import { QuadroarrecadacaoComponent } from './quadroarrecadacao/quadroarrecadacao.component';
import { QuadrosaudeComponent } from './quadrosaude/quadrosaude.component';


const routes: Routes = [
  {
    path: '',
    data: [
      {
      title: 'Dashboard',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Dashboard' }
      ]
    }
  ],
    component:DashboardComponent   
  }
];

@NgModule({
  imports: [
    FormsModule, 
    CommonModule, 
    RouterModule.forChild(routes), 
    ChartsModule,    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAX6iL3kJwjA98L4PMQD2VcxBXJ8L8QTwQ',
      libraries: ['places']
    })
  ],
  declarations: [
    DashboardComponent,    
    QuadrosegurancaComponent, 
    QuadroeducacaoComponent, 
    QuadroarrecadacaoComponent, 
    QuadrosaudeComponent,
    ]
})
export class DashboardModule {
 

}
