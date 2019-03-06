import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  text: string;
  button: string;
  link: string;
  title: string;
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.updateValues.bind(this)();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe( this.updateValues.bind(this));
  }

  updateValues() {
    if (this.router.url !== '/auth/register') {
      this.text = 'Not Registered?';
      this.button = 'REGISTER';
      this.link = 'register';
      this.title = 'Login';
    } else {
      this.text = 'Already Registered?';
      this.button = 'LOGIN';
      this.link = 'login';
      this.title = 'Registration';
    }
  }

}
