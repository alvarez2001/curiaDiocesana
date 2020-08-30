import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CrearBancoModel } from 'src/app/administrador/proyectos/models/project.models';
import { Cargar_Registro_Banco, Cargar_Eliminar_Banco, Reiniciar_Registro_Banco, Cargar_Todos_Los_Bancos } from 'src/app/administrador/proyectos/ngrxStates/proyectos.actions';
import { RegisterProjectState, BancosState } from 'src/app/administrador/proyectos/models/ngrxModelsProjects';
import { Observable } from 'rxjs';
import * as selectors from '../ngrx/solicitante.features'
import * as actions from '../ngrx/solicitante.actions';
import * as modelsNrgx from '../models/SolicitantesNrgx.Models';
import { SolicitudAgregar } from '../models/solicitantes.models';

@Injectable({
  providedIn: 'root'
})
export class NgrxServicesService {

  constructor(private store:Store) { }

  //BANCOS
  cargarRegistroBanco(banco:CrearBancoModel):void{
    this.store.dispatch(Cargar_Registro_Banco({data:banco}))
  }
  cargarEliminarBanco(id:number):void{
    this.store.dispatch(Cargar_Eliminar_Banco({id:id}))
  }
  ReiniciarRegistroEliminarBanco():void{
    this.store.dispatch(Reiniciar_Registro_Banco())
  }
  CargarTodosLosBancos():void{
    this.store.dispatch(Cargar_Todos_Los_Bancos())
  }
  SeleccionarEliminarRegistrarBanco():Observable<RegisterProjectState>{
    return this.store.select(selectors.TomarBancosEliminarRegistrar)
  }
  SeleccionarTodosLosBancos():Observable<BancosState>{
    return this.store.select(selectors.Todoslosbancos)
  }

  //proyectos para solicitud

  cargarProyectosSolicitantesSolicitud(){
    this.store.dispatch(actions.Cargar_Proyectos_Solicitante())
  }
  SeleccionarProyectosSolicitantesSolicitud():Observable<modelsNrgx.ProyectosSolicitantesModule>{
    return this.store.select(selectors.TomarProyectosSolicitantesSolicitud)
  }

  //conceptos
  cargarConceptosSolicitud(){
    this.store.dispatch(actions.CargarConceptosSolicitantes())
  }

  SeleccionarConceptosSolicitud():Observable<modelsNrgx.ConceptosSolicitantesModulo>{
    return this.store.select(selectors.TomarConceptosSolicitantesState)
  }

  //solicitud guardar

  CargarGuardarSolicitud(idBanco:number,idProyecto:number,solicitud:SolicitudAgregar){
    this.store.dispatch(actions.CargarGuardarSolicitud({idBanco,idProyecto,solicitud}))
  }


  SeleccionarSolicitudesDelProyecto():Observable<modelsNrgx.SolicitudesProyecto>{
    return this.store.select(selectors.StateSolicitudesProyecto)
  }

  CargarSolicitudesProyecto(IdProyecto:number):void{
    this.store.dispatch(actions.CargarSolicitudesProyecto({idProyecto:IdProyecto}))
  }
}
