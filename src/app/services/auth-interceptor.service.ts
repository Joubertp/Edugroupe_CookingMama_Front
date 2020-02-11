import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError  } from "rxjs"
import { catchError } from "rxjs/operators"
import { AuthManagerService } from './auth-manager.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router : Router,
              private authManager : AuthManagerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
           Observable<HttpEvent<any>> {

    if(this.authManager.isLoggedIn()) {
      req = req.clone({setHeaders : {Authorization: `Basic ${this.authManager.getCredentials()}`}});
    }

    console.log("request",req)
    return next.handle(req)
               .pipe(catchError((error, caught) => {
                  console.log("error " + error);
                  if(error instanceof HttpErrorResponse) {
                    let resp : HttpErrorResponse = error;
                    if(resp.status == 401 || resp.status == 403) {
                        this.router.navigateByUrl('/signup')
                    }
                  }
                  return throwError(error);
              }))
  }
}


