import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/model/user';
import {AuthService} from '../shared/service/auth.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  returnUrl: string;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private auth: AuthService,
              private _router: Router,
              private toastr: ToastrService) {
    this.user = new User(0, '', '', '', '');
    this.loginForm = this.formBuilder.group({
      email: new FormControl(this.user.email, [
        Validators.required,
      ]),
      password:  new FormControl(this.user.password, [
        Validators.required,
      ])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  loginUser() {
    if (this.loginForm.valid) {
      this.submitted = true;
      this.auth.loginUser(this.user).subscribe(token => {
          this.submitted = false;
          console.log(token);
          localStorage.setItem('token', token.id);
          localStorage.setItem('userId', '' + token.userId);
          this.toastr.success('', 'Login Success');
          this._router.navigateByUrl(this.returnUrl);
        },
        err => {
          this.submitted = false;

        });
    } else {
      this.toastr.error('Error', 'Form Invalid');
    }  }
}
