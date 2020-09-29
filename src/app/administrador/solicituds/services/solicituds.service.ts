import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/services/Global';
import { SolicitudModel, EgresosIngresosModel, EjecucionSolicitud, ModeloPersonalizada } from "../models/solicitud-i";
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { InfoSolicitudModelComponent } from '../info-solicitud-model/info-solicitud-model.component';
import { AsignarTasaModalComponent } from '../asignar-tasa-modal/asignar-tasa-modal.component';
import { AgregarOperacionComponent } from '../agregar-operacion/agregar-operacion.component';

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

  ListarReportesPorDia(data:{fecha:string}):Observable<EgresosIngresosModel[]>{
    return this.http.post<EgresosIngresosModel[]>(`${this.url}reporte/listado/dia/egreso`,data);
  }

  ListarReportesPorDiaIngresos(data:{fecha:string}):Observable<EgresosIngresosModel[]>{
    return this.http.post<EgresosIngresosModel[]>(`${this.url}reporte/listado/dia/ingreso`,data);
  }
  ListarReportesPorDiaEgresosDirecto(data:{fecha:string}):Observable<EgresosIngresosModel[]>{
    return this.http.post<EgresosIngresosModel[]>(`${this.url}reporte/listado/dia/egresoDirecto`, data);
  }
  BusquedaPersonalizadaAPI(data:ModeloPersonalizada){
    window.open(`${this.url}reporte/personalizado/${data.valor}/${data.busqueda}/${data.ano}-${data.mes}`, 'Busqueda personalizada')
  }

  RegistrarOperacion(data:EjecucionSolicitud, idSolicitud:number):Observable<{id:number,mensaje:string}>{

    let formdata = new FormData();
    formdata.append('archivo', data.archivo);
    formdata.append('banco',data.banco);
    formdata.append('comision', data.comision);
    formdata.append('fecha',data.fecha);
    formdata.append('referencia',data.referencia);
    if(data?.proyecto_ingreso){
      formdata.append('proyecto_ingreso',data.proyecto_ingreso)
    }


    return this.http.post<{id:number,mensaje:string}>(`${this.url}operacion/add/solicitud/${idSolicitud}`, formdata)
  }

  buscarEgresoPorId(idEgreso:number):Observable<EgresosIngresosModel>{
    return this.http.get<EgresosIngresosModel>(`${this.url}egreso/${idEgreso}/detallado`)
  }

  anularUnEgresoPorId(idEgreso:number):Observable<string>{
    return this.http.post<string>(`${this.url}egreso/${idEgreso}/anular`,null)
  }

  mostrarInfoSolicitudPdf(idSolicitud:number){
    window.open(`${this.url}planilla/solicitud/${idSolicitud}`, 'Detalle de la solicitud')
  }

  mostrarInfoEgreso(idEgreso:number){
    window.open(`${this.url}planilla/egreso/${idEgreso}`, 'Detalle del egreso')
  }
  mostrarInfoEgresoDirecto(idEgreso:number){
    window.open(`${this.url}planilla/egreso/directo/${idEgreso}`, 'Detalle del egreso')
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
