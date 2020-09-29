import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from 'src/app/services/usersAdmin/users.service';
import { Observable } from 'rxjs';
import { AdminsStateModel, permisosStateModel } from '../models/usersInactive.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-permisos',
  templateUrl: './agregar-permisos.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AgregarPermisosComponent implements OnInit {

  selectAdmin:FormGroup;
  StateListAdmins:Observable<AdminsStateModel>
  allPermisosState$:Observable<permisosStateModel>
  ListpermisosUser$:Observable<permisosStateModel>;

  constructor(private UsersSvc:UsersService,private fb:FormBuilder) { }



  ngOnInit(): void {
    this.selectAdmin = this.fb.group({
      select:['',Validators.required]
    })
    this.cargarInfo()
    this.ListpermisosUser$ = this.UsersSvc.getStatePermisosUser()
    this.allPermisosState$ = this.UsersSvc.getStatePermisos()
    this.StateListAdmins = this.UsersSvc.getStateListAdmins()

    this.selectAdmin.get('select').valueChanges.subscribe(res => this.UsersSvc.searchListPermisosUser(parseInt(res)))
  }




  cargarInfo(){
    this.UsersSvc.searchListAdmins()
    this.UsersSvc.searchListPermisos()
  }

  permitir(number1:number, number2:number, permitir:number):boolean{
    let permiso:boolean = false;
    if(number1 === permitir){
      permiso = true
    }else{
      permiso = false
    }
    if(number2 === permitir){
      permiso = true
    }else{
      permiso = false
    }

    return permiso
  }
}
