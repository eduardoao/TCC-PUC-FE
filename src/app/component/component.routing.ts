
import { AlunoComponent } from  './educacao/aluno/aluno.component';
import { IptuComponent }  from  './arrecadacao/iptu/iptu.component';
import { IptrComponent }  from  './arrecadacao/iptr/iptr.component';
import { HomicidioComponent} from './seguranca/homicidio/homicidio.component';
import { OcorrenciaarmafogoComponent } from './seguranca/ocorrenciaarmafogo/ocorrenciaarmafogo.component';
import { OcorrenciafurtorouboComponent} from './seguranca/ocorrenciafurtoroubo/ocorrenciafurtoroubo.component';

import { Routes } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [		
			{
				path: 'card',
				component: AlunoComponent,
				data: {
					title: 'Aluno',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Aluno' }
					]
				},
				canActivate: [AuthGuard]
			},
			{
				path: 'aluno',
				component: AlunoComponent,
				data: {
					title: 'Aluno',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Aluno' }
					]
				},
				canActivate: [AuthGuard]
			},
			{
				path: 'iptu',
				component: IptuComponent,
				data: {
					title: 'IPTU',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'IPTU' }
					]
				},
				canActivate: [AuthGuard]
			},
			{
				path: 'iptr',
				component: IptrComponent,
				data: {
					title: 'IPTR',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'IPTR' }
					]
				},
				canActivate: [AuthGuard]
			}	,
			{
				path: 'homicidio',
				component: HomicidioComponent,
				data: {
					title: 'Homicídio',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Homicídio' }
					]
				},
				canActivate: [AuthGuard]
			}	,
			{
				path: 'ocorrenciaarmafogo',
				component: OcorrenciaarmafogoComponent,
				data: {
					title: 'Arma de Fogo',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Arma de Fogo' }
					]
				}
			}	,
			{
				path: 'ocorrenciafurtoroubo',
				component: OcorrenciafurtorouboComponent,
				data: {
					title: 'Furto e Roubo',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Furto e Roubo' }
					]
				}
			},
			{ path: 'login', 
			  component: LoginComponent ,
				data: {
					title: 'Login',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Login' }
					]
				}
		 },
		 { path: 'register', 
		 component: RegisterComponent ,
		 data: {
			 title: 'Register',
			 urls: [
				 { title: 'Dashboard', url: '/dashboard' },
				 { title: 'ngComponent' },
				 { title: 'Register' }
			 ]
		 }
	}		
		]
	}
];
