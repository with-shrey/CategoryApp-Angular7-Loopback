import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {User} from '../model/user';
import {Token} from '../model/token';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _users = 'Users';
  private _login_user = this._users + '/login';

  constructor(private http: HttpClient, private router: Router) { }

  public registerUser(user: User): Observable<User> {
    const {id, confirm_password, ...restUser} = user;
    return this.http.post<User>(this._users, restUser);
  }

  public loginUser(user: User): Observable<Token> {
    const {email, password, ...restUser} = user;
    return this.http.post<Token>(this._login_user, {email, password});
  }
  public getUserId() {
    return localStorage.getItem('userId');
  }
  public getToken() {
    return localStorage.getItem('token');
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(this._users + '/' + this.getUserId() + '?access_token=' + this.getToken());
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
