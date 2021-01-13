import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthenticationService } from 'src/app/_helpers/_services';
//declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  
  [x: string]: any;
  @Output()
  toggleSidebar = new EventEmitter<void>();
  currentUser: any;
  public login : any;
  public showSearch = false;

  constructor(private authenticationService: AuthenticationService, 
    private router: Router,) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(){
    this.login = this.authenticationService.decodeToken(this.authenticationService.currentUserValue.accessToken!)
    console.log(this.login)
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/dashboard']);
  }

  signin() {   
    this.router.navigate(['/component/login']);
  }
}
