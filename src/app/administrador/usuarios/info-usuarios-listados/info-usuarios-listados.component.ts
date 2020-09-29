import { Component, OnInit, Inject, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel, UserStatusModel } from '../models/usersInactive.models';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { loadActivatedUser, loadInactivatedUser, resetUsersActivatedOrDesactivated } from '../statesNgrx';
import { UsersService } from 'src/app/services/usersAdmin/users.service';
import { Observable } from 'rxjs';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-info-usuarios-listados',
  templateUrl: './info-usuarios-listados.component.html',
  providers:[UsersService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InfoUsuariosListadosComponent implements OnInit, OnDestroy {

  formMuestra:FormGroup;
  active:boolean = true;

  statusUserState:Observable<UserStatusModel>;

  constructor( public dialogRef: MatDialogRef<InfoUsuariosListadosComponent>,@Inject(MAT_DIALOG_DATA) public data: UserModel, private fb:FormBuilder, private store:Store, private usersSvc:UsersService, private LogRegSvc:LogRegService) {
    this.statusUserState = this.usersSvc.getUserStatusState();
  }

  ngOnInit(): void {
    const fecha = moment(this.data.created_at);
    this.formMuestra = this.fb.group({
      nombreCompleto:[this.nombreCompleto()],
      cedula:[this.data.nacionalidad+this.data.cedula],
      status:[this.statusUser()],
      email:[this.data.email],
      fechaCreacion:[fecha.format('DD/MM/YYYY hh:mm A')],
      tipoUsuario:[this.tipoUsuario()],
      usuario:[this.data.usuario]
    })
  }


  ngOnDestroy(){
    this.store.dispatch(resetUsersActivatedOrDesactivated())
  }

  ValidarPermiso(permisos:string[]):boolean{
    return this.LogRegSvc.VerificarPermiso(permisos)
  }

  private tipoUsuario(){
    const tipo = this.data.tipo;
    return (tipo === 0)? 'Solicitante':'Administrador'
  }




  private statusUser():string{
    const status = this.data.status;
    return (status === 0) ? 'Inactivo': 'Activo'
  }

  private nombreCompleto():string{
    return `${this.data.apellidos}, ${this.data.nombres}`
  }

  cerrarDialog(){
    this.active = false;
    this.dialogRef.close()
  }


  activarUsuario(){
    this.store.dispatch(loadActivatedUser({id:this.data.id}))
  }

  desactivarUsuario(){
    this.store.dispatch(loadInactivatedUser({id:this.data.id}))
  }

}
