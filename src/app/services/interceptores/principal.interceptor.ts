import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogRegService } from '../login/log-reg.service';

@Injectable()
export class PrincipalInterceptor implements HttpInterceptor {

  constructor(private loginSvc:LogRegService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const token = this.loginSvc.getToken();

    if(!token){
      return next.handle(request);
    }

    const cloned = request.clone({
      headers:request.headers.set('Authorization',token)
    })



    return next.handle(cloned);
  }
}
