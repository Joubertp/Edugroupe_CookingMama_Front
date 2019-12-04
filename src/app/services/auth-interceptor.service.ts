import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError  } from "rxjs"
import { catchError } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
           Observable<HttpEvent<any>> {
    let credentials = window.btoa( "admin:admin")

    req = req.clone({
      setHeaders:
        { Authorization: `Basic ${credentials}` }
    })
    console.log("request",req)
    return next.handle(req)
    .pipe(catchError((error, caught) => {
      console.error("AuthInterceptorService",error)
      console.log("AuthInterceptorService",caught)
      return throwError(error)
    }))
  }
}


