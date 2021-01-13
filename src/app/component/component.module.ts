import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { AgmCoreModule , GoogleMapsAPIWrapper} from '@agm/core';

import { AlunoComponent }  from './educacao/aluno/aluno.component';
import { IptuComponent }  from './arrecadacao/iptu/iptu.component';
import { IptrComponent }  from './arrecadacao/iptr/iptr.component';
import { HomicidioComponent }  from './seguranca/homicidio/homicidio.component';
import { OcorrenciaarmafogoComponent }  from './seguranca/ocorrenciaarmafogo/ocorrenciaarmafogo.component';
import { OcorrenciafurtorouboComponent }  from './seguranca/ocorrenciafurtoroubo/ocorrenciafurtoroubo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAX6iL3kJwjA98L4PMQD2VcxBXJ8L8QTwQ'      
    })
  ],
  providers: [
    GoogleMapsAPIWrapper // <---
  ],
  declarations: [  
    AlunoComponent,
    IptuComponent,
    IptrComponent,
    HomicidioComponent,
    OcorrenciaarmafogoComponent,
    OcorrenciafurtorouboComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class ComponentsModule {}
