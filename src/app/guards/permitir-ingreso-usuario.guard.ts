import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogRegService } from '../services/login/log-reg.service';
import { SharedService } from '../services/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class PermitirIngresoUsuarioGuard implements CanActivate {
  constructor(private LogRegSvc:LogRegService, private sharedSvc:SharedService){}
  canActivate(): boolean {

      const usuarioActivo = this.LogRegSvc.getDetailUser();

      if(usuarioActivo){
        return true
      }else{
        this.sharedSvc.redirigirDondeQuiera('/');
        this.sharedSvc.alertError('No ha ingresado al sistema', 'Error autentificación')
        return false
      }

  }

}
