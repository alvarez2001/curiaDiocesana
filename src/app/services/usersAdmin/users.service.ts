import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../Global';
import { UsersAdminInterface } from 'src/app/administrador/usuarios/models/usersAdmin.models';
import { Observable } from 'rxjs';
import { LogRegService } from '../login/log-reg.service';
import { PaginateUsers, UserStatusModel } from "src/app/administrador/usuarios/models/usersInactive.models";
import { getUsersList, getUserStatus } from 'src/app/administrador/usuarios/statesNgrx/featureUserAdminSelector';
import { Store } from '@ngrx/store';
import { LoadLogoutUser } from 'src/app/actions/login.actions';

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

}
