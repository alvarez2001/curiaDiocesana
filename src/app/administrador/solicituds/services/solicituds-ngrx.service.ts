import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as features from '../ngrx/solicituds.feature';
import { Observable } from 'rxjs';
import { SolicitudStateModel, AsignacionTasaState, DatosReportesDiaState } from '../models/models-ngrx';
import * as actions from '../ngrx/solicituds.actions';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';
import { EjecucionSolicitud } from '../models/solicitud-i';


@Injectable({
  providedIn: 'root'
})
export class SolicitudsNgrxService {
  constructor(private store:Store) { }


  SeleccionarSolicitudesRealizas():Observable<SolicitudStateModel>{
    return this.store.select(features.StateSolicitudsRealizadas)
  }
  DispatchSolicitudPorAsignacionTasa():void{
    this.store.dispatch(actions.CargarSolicitudesPorAsignarTasa());
  }
  DispatSolicitudPorRevision():void{
    this.store.dispatch(actions.CargarSolicitudesPorRevision())
  }
  DispatchSolicitudesRevisadas():void{
    this.store.dispatch(actions.CargarSolicitudesRevisadas())
  }

  DispatchSolicitudesPorAutorizacion():void{
    this.store.dispatch(actions.CargarSolicitudesPorAutorizacion())
  }
  DispatchSolicitudesPorEjecutado():void{
    this.store.dispatch(actions.CargarSolicitudesPorEjecutado())
  }
  DispatchSolicitudesRechazadas():void{
    this.store.dispatch(actions.CargarSolicitudesRechazadas())
  }

  //asignar tasa
  SeleccionarStateAsignarTasa():Observable<AsignacionTasaState>{
    return this.store.select(features.StateAsignarTasa)
  }
  CargarAsignarTasa(idSolicitud:number, tasa:{tasa:number, codigo?:string}){
    this.store.dispatch(actions.CargarAsignarTasa({idSolicitud,tasa}))
  }
  IntroducirClaveTasa():void{
    this.store.dispatch(actions.IntroducirClaveAsignarTasa())
  }
  IntroducirClaveCorrecta():void{
    this.store.dispatch(actions.IntroducirCorrectaClaveAsignarTasa())
  }
  ReiniciarAsignarTasa(){
    this.store.dispatch(actions.ReiniciarAsignarTasa());
  }

  //Generar codigo
  SeleccionarStateGenerarCodigo():Observable<BasicDatas>{
    return this.store.select(features.StateGenerarCodigo)
  }
  CargarStateGenerarCodigo():void{
    this.store.dispatch(actions.CargarGenerarCodigoAumentoTasa())
  }

  //los demas
  SeleccionarStateProcesoSolicitud():Observable<BasicDatas>{
    return this.store.select(features.StateProcesoSolicitud)
  }
  CargarRevisarSolicitud(solicitud:number):void{
    this.store.dispatch(actions.CargarRevisarSolicitud({solicitud:solicitud}))
  }
  CargarAutorizarSolicitud(solicitud:number):void{
    this.store.dispatch(actions.CargarAutorizarSolicitud({solicitud:solicitud}))
  }
  CargarRechazarSolicitud(solicitud:number):void{
    this.store.dispatch(actions.CargarRechazarSolicitud({solicitud:solicitud}))
  }
  ReiniciarStateProcesoSolicitud():void{
    this.store.dispatch(actions.ReiniciarProcesoSolicitud())
  }

  //REPORTES

  SeleccionarStateReportesPorDia():Observable<DatosReportesDiaState>{
    return this.store.select(features.StateReportesPorDia)
  }
  DispatchCargarReportesPorDia(data:string){
    this.store.dispatch(actions.CargarReportePorDia({fecha:data}))
  }
  DispatchCargarReportesPorDiaIngresos(data:string){
    this.store.dispatch(actions.CargarReportePorDiaIngresos({fecha:data}))
  }
  ReiniciarReportePorDia(){
    this.store.dispatch(actions.ReiniciarReportePorDia())
  }

  //registrar operacion

  SeleccionarStateOperacion():Observable<BasicDatas>{
    return this.store.select(features.StateAgregarOperacion)
  }
  DistpatchCargarRegistroOperacion(data:EjecucionSolicitud,idSolicitud:number):void{
    this.store.dispatch(actions.CargarRegistrarOperacion({data,idSolicitud}))
  }
  ReiniciarRegistroOperacion():void{
    this.store.dispatch(actions.ReiniciarRegistrarOperacion())
  }



  //egresos
  SeleccionarStateInfoEgresoDetallado():Observable<BasicDatas>{
    return this.store.select(features.StateInfoEgresoDetallado);
  }

  DispatchCargarInfoEgresoDetallado(idEgreso:number):void{
    this.store.dispatch(actions.CargarEgresoDetallado({idEgreso:idEgreso}));
  }

  SeleccionarStateAnularEgreso():Observable<BasicDatas>{
    return this.store.select(features.StateAnularEgreso);
  }
  DispatchCargarAnularEgreso(idEgreso:number):void{
    this.store.dispatch(actions.CargarAnularEgreso({idEgreso:idEgreso}));
  }
  DispatchReiniciarAnularEgreso(){
    this.store.dispatch(actions.ReiniciarAnularEgreso())
  }

}
