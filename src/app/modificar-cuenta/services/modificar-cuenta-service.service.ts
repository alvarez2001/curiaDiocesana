import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from 'src/app/services/Global';
import { UserModel } from 'src/app/administrador/usuarios/models/usersInactive.models';
import { Observable } from 'rxjs';
import { LogRegService } from 'src/app/services/login/log-reg.service';
import { ChangePasswordInterface } from '../models/stateModificarData.interface';

@Injectable({
  providedIn: 'root'
})
export class ModificarCuentaServiceService {

  private url:string
  constructor(private http:HttpClient) {
    this.url = Global.url
  }



  actualizarData(data:UserModel):Observable<string>{
    return this.http.post<string>(`${this.url}modificar/usuario/activo`,data)
  }

  actualizarPassword(passwords:ChangePasswordInterface):Observable<any>{
    return this.http.post(`${this.url}cambiar/clave/usuario`,passwords)
  }
}
