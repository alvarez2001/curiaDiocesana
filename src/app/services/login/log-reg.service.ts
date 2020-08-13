import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "../Global";
import { Observable } from 'rxjs';
import { userDataInterface } from "../../models/user.model";
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LogRegService {

  private url:string;
  constructor(private http:HttpClient,private sharedSvc:SharedService) {
    this.url = Global.url
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
     const headers = new HttpHeaders().set('Authorization', this.getToken())
    return this.http.get(`${this.url}informacion/usuario/activo`,{headers})
   }


   cleanSessionStorage(){
     sessionStorage.clear();
   }

   setDetailUser(data){
    this.redirigirUsuario(data.tipo)
    const basicData = {
      nombres:data.nombres,
      apellidos:data.apellidos,
      nacionalidad:data.nacionalidad,
      cedula:data.cedula,
      status:data.status
    }
    this.setDetailUserStorage(basicData)
   }

   private setDetailUserStorage(basicData){
    sessionStorage.setItem('detailUser', JSON.stringify(basicData))
   }

   getDetailUser(){
     return JSON.parse(sessionStorage.getItem('detailUser'))
   }


   setSessionStorage(data){
     this.setStorageToken(data);
     this.setTipoUsuario(data.tipo_usuario)
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
