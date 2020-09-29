import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { LogRegService } from '../services/login/log-reg.service';
import { SharedService } from '../services/shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class PermitirSegunPermisoGuard implements CanActivate {
  constructor(private LogRegSvc:LogRegService,private sharedSvc:SharedService){}
  canActivate(next: ActivatedRouteSnapshot): boolean  {
    const permisosRuta:string[] = next.data.permiso;


    let valor:boolean = this.LogRegSvc.VerificarPermiso(permisosRuta)

    if(!valor){
      this.sharedSvc.alertError('No tienes permiso para usar esta función', 'Permiso denegado');
    }

    return valor;
  }

}
