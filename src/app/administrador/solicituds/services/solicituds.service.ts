import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/services/Global';
import { SolicitudModel } from "../models/solicitud-i";
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InfoSolicitudModelComponent } from '../info-solicitud-model/info-solicitud-model.component';
import { AsignarTasaModalComponent } from '../asignar-tasa-modal/asignar-tasa-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SolicitudsService {

  private url:string

  constructor(private http:HttpClient,private dialog: MatDialog) {
    this.url = Global.url
  }


  SolicitudesPorAsignarTasa():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}solicitudes/0`)
  }

  SolicitudesPorRevision():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}solicitudes/5`)
  }

  SolicitudesRevisadas():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}solicitudes/1`)
  }

  SolicitudesPorAutorizacion():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}solicitudes/2`)
  }

  SolicitudesEjecutado():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}solicitudes/3`)
  }
  SolicitudesRechazadas():Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}solicitudes/4`)
  }

  AsignarTasaSolicitud(solicitudId:number,data:{tasa:number}):Observable<string>{
    return this.http.post<string>(`${this.url}solicitud/${solicitudId}/asignar/tasa`,data)
  }

  generarCodigo():Observable<string>{
    return this.http.post<string>(`${this.url}generador/codigo`,null)
  }

  revisarSolicitud(idSolicitud:number):Observable<string>{
    return this.http.post<string>(`${this.url}solicitud/${idSolicitud}/revisada`,null)
  }
  rechazarSolicitud(idSolicitud:number):Observable<string>{
    return this.http.post<string>(`${this.url}solicitud/${idSolicitud}/rechazar`,null)
  }
  autorizarSolicitud(idSolicitud:number):Observable<string>{
    return this.http.post<string>(`${this.url}solicitud/${idSolicitud}/autorizar`,null)
  }


  ModalInfoSolicitud(data:SolicitudModel,tipo:number){
    return this.dialog.open(InfoSolicitudModelComponent, {
      width: '1000px',
      data:{
        solicitud:data,
        tipoSolicitud:tipo
      },
      disableClose:true
    });
  }





}
