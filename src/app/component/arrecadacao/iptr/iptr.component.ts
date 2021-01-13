import { Component, OnInit } from '@angular/core';
import { Iptr } from 'src/app/model/Iptr';
import { Iptu } from 'src/app/model/Iptu';
import { User } from 'src/app/model/User';
import { ArrecadacaoService } from 'src/app/services/arrecadacao.service';
import { AuthenticationService } from 'src/app/_helpers/_services';

@Component({
  selector: 'app-iptr',
  templateUrl: './iptr.component.html',
  styleUrls: ['./iptr.component.css']
})
export class IptrComponent implements OnInit {

  constructor(private taxationservice: ArrecadacaoService,
    private authenticationService: AuthenticationService
    ) {}

    iptr: Iptr[]
    errMess: string;
    user: User;
    login: any;


  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.login = this.authenticationService.decodeToken(this.user.accessToken!)
    this.retornarIptuContribuinte(this.login.email)
   
  }

  retornarIptuContribuinte(contribuinte: string){
    this.taxationservice.retornaIptrContribuinte(contribuinte)
    .subscribe( iptr => this.iptr = iptr,
      errmess => this.errMess = (errmess as any) );
  }

}
