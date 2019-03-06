import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../modules/auth/shared/service/auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private auth: AuthService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: environment.apiBaseUrl + req.url,
      setHeaders: {
        ['Content-Type']: `application/json`
      }
    });
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          console.log(event.body);
        }
        return event;
      }),
      catchError(error => {
        if (error.error.error) {
          this.toastr.error(error.error.error.message.split(';').join('\n'), error.error.error.name);
          if (error.error.error.status === 401) {
            this.auth.logout();
          }
        } else {
          this.toastr.error(error.message, 'Error');

        }
        return throwError(error);
      })
    );
  }
}
