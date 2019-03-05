import { Component, OnInit } from '@angular/core';
import {User} from '../shared/model/user';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public registerForm: FormGroup;
  public submitted = false;
  constructor(private service: AuthService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService
              ) {
    this.user = new User(-1, '', '', '', '');
    this.registerForm = this.formBuilder.group({
      'username': new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'email': new FormControl(this.user.email, [
        Validators.required,
        Validators.email]),
      'password': new FormControl(this.user.password, [
        Validators.required,
        // RegisterComponent.MatchPassword
      ]),
      'confirm_password': new FormControl(this.user.confirm_password, [
        Validators.required,
        // RegisterComponent.MatchPassword
      ])
    });
  }
  ngOnInit() {

  }
  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }

  registerUser() {
    if (this.registerForm.valid) {
      this.submitted = true;
      this.service.registerUser(this.user).subscribe(user => {
          this.submitted = false;
          console.log(user);
        this.toastr.success(`${user.username} Successfully`, 'Registered');
      },
        err => {
          this.submitted = false;

        });
    } else {
      this.toastr.error('Error', 'Form Invalid');
    }
  }

}
