import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "../Global";
import { Observable } from 'rxjs';
import { userDataInterface } from "../../models/user.model";
import { SharedService } from '../shared/shared.service';
import { UserModel } from 'src/app/administrador/usuarios/models/usersInactive.models';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  private url:string;
  constructor(private http:HttpClient,private sharedSvc:SharedService) {
    this.url = Global.url
   }

   VerificarPermiso(permiso:string[]):boolean{
    let valor:boolean = false;
    const permisosUsuario:string[] = this.getPermisos();

    permisosUsuario.forEach(element => {
      if(permiso.includes(element)){
        valor = true
      }
    })

    return valor
   }


   loguearse(data):Observable<any>{
     return this.http.post(`${this.url}login`,data);
   }

   crearUsuarioSolicitante(data:userDataInterface):Observable<string>{
    return this.http.post<string>(`${this.url}nuevo/usuario/solicitante`,data)
   }

   recuperarPassword(data):Observable<any>{
     return this.http.post(`${this.url}recuperar/password/usuario`,data)
   }


   detailDataUser():Observable<any>{
    return this.http.get(`${this.url}informacion/usuario/activo`)
   }


   logoutUser():Observable<{message:string}>{
    return this.http.get<{message:string}>(`${this.url}logout`)
   }



   cleanSessionStorage(){
     sessionStorage.clear();
   }

   setDetailUser(data){
    this.redirigirUsuario(data.tipo)

    this.setDetailUserStorage(data)
   }

   setDetailUserStorage(basicData){
    sessionStorage.setItem('detailUser', JSON.stringify(basicData))
   }

   getDetailUser():UserModel {
     return JSON.parse(sessionStorage.getItem('detailUser'))
   }


   setSessionStorage(data){
     this.setPermisos(data.permisos)
     this.setStorageToken(data);
     this.setTipoUsuario(data.tipo_usuario)
   }

   setPermisos(permisos){
     sessionStorage.setItem('permisos',JSON.stringify(permisos))
   }

   getPermisos():string[] {
     return JSON.parse(sessionStorage.getItem('permisos'))
   }

   private setTipoUsuario(data){
    sessionStorage.setItem('tipoUsuario', btoa(data))
   }

   getTipoUsuario():number{
    const tipo = sessionStorage.getItem('tipoUsuario')
    return parseInt(atob(tipo))
   }

   private setStorageToken(data):void{
     const token = `${data.token_type} ${data.token}`;
     sessionStorage.setItem('token',token)
   }
   getToken():string{
    return sessionStorage.getItem('token')
   }

   /* 0 => solicitante, 1 => administrador */
   /* 0 => inactivo, 1 => activo */

   devolverTipoUsuario(tipo:number){
    return (tipo === 0) ? 'Solicitante' : 'Administrador'
   }

   redirigirUsuario(tipo:number){
    switch (tipo) {
      case 0:
        this.sharedSvc.redirigirDondeQuiera('/solicitante')
        break;

      case 1:
        this.sharedSvc.redirigirDondeQuiera('/administrador')
        break;
      default:
        this.sharedSvc.redirigirDondeQuiera('/')
        break;
    }
   }


}
