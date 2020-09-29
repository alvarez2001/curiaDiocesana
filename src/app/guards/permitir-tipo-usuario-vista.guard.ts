import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanLoad, Route, UrlSegment } from '@angular/router';

import { LogRegService } from '../services/login/log-reg.service';


@Injectable({
  providedIn: 'root'
})
export class PermitirTipoUsuarioVistaGuard implements CanActivate, CanLoad {
  constructor(private LogRegSvc:LogRegService){}

  canActivate(
    next: ActivatedRouteSnapshot): boolean  {
      const tipoRuta = next.data.tipo;
      const tipoUsuario = this.LogRegSvc.getTipoUsuario();
      if(tipoRuta === tipoUsuario){
        return true;
      }

      this.LogRegSvc.redirigirUsuario(tipoUsuario);
      return false;

  }


  canLoad(route: Route): boolean {

    const tipo = route.data.tipo;
    const tipoUsuario = this.LogRegSvc.getTipoUsuario()

    if(tipo === tipoUsuario){
      return true;
    }

    this.LogRegSvc.redirigirUsuario(tipoUsuario);
    return false;
  }

}
