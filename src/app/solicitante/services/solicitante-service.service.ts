import { Injectable } from '@angular/core';
import { Global } from 'src/app/services/Global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proyectosUsuarioSolicitanteAddSolicitud, SolicitudAgregar } from "../models/solicitantes.models";
import { CrearNuevoConceptoInterface } from 'src/app/administrador/proyectos/models/project.models';
import { Solicitud } from 'src/app/administrador/solicituds/models/solicitud-i';

@Injectable({
  providedIn: 'root'
})
export class SolicitanteServiceService {

  private url:string
  constructor(private http:HttpClient) {
    this.url = Global.url
  }

  proyectosSolicitante():Observable<proyectosUsuarioSolicitanteAddSolicitud[]>{
    return this.http.get<proyectosUsuarioSolicitanteAddSolicitud[]>(`${this.url}proyectos/usuario/solicitante`)
  }

  registrarSolicitud(idProyecto:number,idBanco:number,data:SolicitudAgregar):Observable<string>{
    return this.http.post<string>(`${this.url}solicitud/add/proyecto/${idProyecto}/banco/${idBanco}`,data)
  }
  ConceptosSolicitantes():Observable<CrearNuevoConceptoInterface[]>{
    return this.http.get<CrearNuevoConceptoInterface[]>(`${this.url}conceptos/solicitantes`)
  }

  BuscarSolicitudesProyecto(idProyecto:number):Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(`${this.url}solicitudes/solicitantes/proyecto/${idProyecto}`);
  }



}
