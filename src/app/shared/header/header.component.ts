import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabs: any;
  homeTabs: any = [
    { name: 'Home', link: '/home' },
  ]
  registerTabs: any = [
    { name: 'Register', link: '/auth/sign-up' },
    { name: 'LogIn', link: '/auth/login' },

  ]
  subscription: Subscription[] = [];
  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    if(localStorage.getItem('credentials')){
      this.tabs=this.homeTabs
    }
    else{
      this.tabs=this.registerTabs
    }
  }

  logout() {
    // if (confirm('are you sure you want to logout')) {
      // localStorage.removeItem('credentials');
      this.authenticationService.removeUser();
    // }F
  }
}