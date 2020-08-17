import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../Global';
import { UsersAdminInterface } from 'src/app/administrador/usuarios/models/usersAdmin.models';
import { Observable } from 'rxjs';
import { LogRegService } from '../login/log-reg.service';
import { PaginateUsers, UserStatusModel, permisosStateModel, AdminsStateModel, UserModel, permisosModel, PermisoAsignarRevocar, PermisosRevocarAsignarState } from "src/app/administrador/usuarios/models/usersInactive.models";
import { getUsersList, getUserStatus, getListAdmins, getListPermisos, getListPermisosUser, getAddOrTrashPermisoUser } from 'src/app/administrador/usuarios/statesNgrx/featureUserAdminSelector';
import { Store } from '@ngrx/store';
import { LoadLogoutUser } from 'src/app/actions/login.actions';

import * as usuariosActions from '../../administrador/usuarios/statesNgrx/usuarios.actions'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string
  constructor(private http:HttpClient, private loginSvc:LogRegService,private store:Store) {
    this.url = Global.url;
  }


  registerUserAdmin(data:UsersAdminInterface):Observable<string>{

    return this.http.post<string>(`${this.url}nuevo/usuario/administrador`,data)
  }


  usersInactive():Observable<PaginateUsers>{
    return this.http.get<PaginateUsers>(`${this.url}listado/usuarios/inactivos`)
  }

  usersActives():Observable<PaginateUsers>{

    return this.http.get<PaginateUsers>(`${this.url}listado/usuarios/activos`)
  }

  usersListPaginate(page:string):Observable<PaginateUsers>{

    return this.http.get<PaginateUsers>(`${page}`)
  }

  userActivated(id:number):Observable<any>{

    return this.http.post(`${this.url}activar/usuario/${id}`,null)
  }

  userDesactivated(id:number):Observable<any>{
    return this.http.post(`${this.url}desactivar/usuario/${id}`,null)
  }

  DistpatchLogoutUser(){
    this.store.dispatch(LoadLogoutUser())
  }

  getUsersListState():Observable<any>{
    return this.store.select(getUsersList)
  }

  getUserStatusState():Observable<UserStatusModel>{
    return this.store.select(getUserStatus)
  }

  /* PERMISOS */

  listarUsuariosAdministradores():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}lista/usuarios/administradores`)
  }

  listarPermisos():Observable<permisosModel[]>{
    return this.http.get<permisosModel[]>(`${this.url}listado/permisos`)
  }

  permisosDelUsuario(id:number):Observable<permisosModel[]>{
    return this.http.get<permisosModel[]>(`${this.url}permisos/usuario/${id}`)
  }

  agregarPermiso(data:PermisoAsignarRevocar):Observable<string>{
    return this.http.post<string>(`${this.url}asignar/permiso/usuario`,data)
  }

  revocarPermiso(data:PermisoAsignarRevocar):Observable<string>{
    return this.http.post<string>(`${this.url}revocar/permiso/usuario`,data)
  }





  /* PERMISOS FEATURE-SELECTOR */
  getStatePermisos():Observable<permisosStateModel>{
    return this.store.select(getListPermisos)
  }

  getStatePermisosUser():Observable<permisosStateModel>{
    return this.store.select(getListPermisosUser)
  }

  getStateListAdmins():Observable<AdminsStateModel>{
    return this.store.select(getListAdmins)
  }

  getAddOrTrashPermisoUser():Observable<PermisosRevocarAsignarState>{
    return this.store.select(getAddOrTrashPermisoUser)
  }

  /* DISTPATCH PERMISOS */
  searchListPermisos():void{
    this.store.dispatch(usuariosActions.loadAllPermisos())
  }
  searchListPermisosUser(id:number):void{
    this.store.dispatch(usuariosActions.loadPermisosUser({id:id}))
  }

  searchListAdmins():void{
    this.store.dispatch(usuariosActions.loadAllAdministrador())
  }

  addPermisosUser(data:PermisoAsignarRevocar):void{
    this.store.dispatch(usuariosActions.loadAsignarPermiso({data:data}))
  }

  removePermisosUser(data:PermisoAsignarRevocar):void{
    this.store.dispatch(usuariosActions.loadRevocarPermiso({data:data}))
  }

}
