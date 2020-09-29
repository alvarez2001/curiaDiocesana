import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from 'src/app/services/usersAdmin/users.service';
import { permisosStateModel, permisosModel, PermisoAsignarRevocar, PermisosRevocarAsignarState } from '../models/usersInactive.models';
import { Observable } from 'rxjs';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-listar-permisos',
  templateUrl: './listar-permisos.component.html',
  styleUrls: ['./listar-permisos.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListarPermisosComponent  {

  @Input('idAdmin') idAdmin:number;
  @Input('allPermisos') allPermisos:permisosModel[]
  @Input('permisosUser') permisosUser:permisosStateModel;

  addTrashPermisos:Observable<PermisosRevocarAsignarState>;

  constructor(private UsersSvc:UsersService, private LogRegSvc:LogRegService) {
    this.addTrashPermisos = this.UsersSvc.getAddOrTrashPermisoUser()
   }

   ValidarPermiso(permisos:string[]):boolean{
    return this.LogRegSvc.VerificarPermiso(permisos)
  }

  comprobarIgualdad(permisoBuscado:string):boolean{
    const permisos = this.permisosUser.permisos;
    if(permisos && permisos.length > 0){
      for (const permiso of permisos) {
        if(permiso === permisoBuscado) {
          return true
        }
      }
    }
    return false
  }



  agregarPermiso(permiso:string, id:number):void{
    const data:PermisoAsignarRevocar = {
      usuario:id,
      permiso:permiso
    }
    this.UsersSvc.addPermisosUser(data)
  }
  eliminarPermiso(permiso:string, id:number){
    const data:PermisoAsignarRevocar = {
      usuario:id,
      permiso:permiso
    }
    this.UsersSvc.removePermisosUser(data)
  }
}
