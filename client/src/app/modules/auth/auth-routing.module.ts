import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {LoggedinGuard} from './shared/loggedin.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [LoggedinGuard],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
