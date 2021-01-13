import { Component, OnInit } from '@angular/core';
import { Iptu } from 'src/app/model/Iptu';
import { User } from 'src/app/model/User';
import { ArrecadacaoService } from 'src/app/services/arrecadacao.service';
import { AuthenticationService } from 'src/app/_helpers/_services';

@Component({
  selector: 'app-iptu',
  templateUrl: './iptu.component.html',
  styleUrls: ['./iptu.component.css']
})
export class IptuComponent implements OnInit {

  constructor(private taxationservice: ArrecadacaoService,
    private authenticationService: AuthenticationService
    ) {}

    iptu: Iptu[]
    errMess: string;
    user: User;
    login: any;


  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.login = this.authenticationService.decodeToken(this.user.accessToken!)
    this.retornarIptuContribuinte(this.login.email)
   
  }

  retornarIptuContribuinte(contribuinte: string){
    this.taxationservice.retornaIptuContribuinte(contribuinte)
    .subscribe( iptu => this.iptu = iptu,
      errmess => this.errMess = (errmess as any) );
  }

}
