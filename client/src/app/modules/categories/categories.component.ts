import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/shared/service/auth.service';
import {User} from '../auth/shared/model/user';
import {BreadcrumService} from '../../shared/service/breadcrum.service';
declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  user: User;
  constructor(public authService: AuthService, public breadcrum: BreadcrumService) {
    this.user = new User(0, '', '', '' , '');
  }

  ngOnInit() {
    // $(document).ready(function() {
    //   $('.sidenav').sidenav();
    // });
    this.authService.getUser().subscribe(user => this.user = user);
  }
}
