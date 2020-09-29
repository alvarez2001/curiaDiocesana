import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from "../ngrxStates/proyectos.actions";
import * as models from "../models/project.models";
import * as modelsState from '../models/ngrxModelsProjects';
import * as selectors from '../ngrxStates/proyectos.features';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/services/Global';
import { Observable, of } from 'rxjs';
import { UserModel, AdminsStateModel, BasicDatas } from '../../usuarios/models/usersInactive.models';
import { map } from 'rxjs/operators';
import { DetalleProyectoModalComponent } from '../detalle-proyecto-modal/detalle-proyecto-modal.component';
import { InfoBancoComponent } from "../info-banco/info-banco.component";
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private url:string;
  constructor(private store:Store, private http:HttpClient,private dialog: MatDialog) {
    this.url = Global.url
  }



  registerProject(data:models.ProjectModel):Observable<string>{
    return this.http.post<string>(`${this.url}proyectos/nuevo`, data)
  }

  UsuariosSolicitantesLista():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.url}lista/usuarios/solicitantes`)
  }

  proyectosPaginados():Observable<models.PaginateProjectsComplete>{
    return this.http.get<models.PaginateProjectsComplete>(`${this.url}proyectos/paginados`)
  }
  cargarProyectoBusquedaXnombre(valor:string):Observable<models.PaginateProjectsComplete>{
    return this.http.get<models.PaginateProjectsComplete>(`${this.url}proyectos/busqueda/nombre/${valor}`);
  }
  PaginateProjects(url:string):Observable<models.PaginateProjectsComplete>{
    return this.http.get<models.PaginateProjectsComplete>(url)
  }

  proyectosSinPaginar():Observable<models.PaginateProjectsComplete>{
    return this.http.get<models.ProjectModelComplete[]>(`${this.url}proyectos/todos`).pipe(
      map(value => {
        return {
          data:value
        }
      })
    )
  }
//
  InformacionDelProyecto(id:number):Observable<models.ProjectModelComplete>{
    return this.http.get<models.ProjectModelComplete>(`${this.url}informacion/proyecto/${id}`)
  }
//
  modificarProyectoInfo(idProyecto:number,data:models.ModelModificarDatosInformacion):Observable<string>{
    return this.http.post<string>(`${this.url}proyecto/${idProyecto}/modificar/informacion`,data)
  }
//
  modificarProyectoCodigo(idProyecto:number,codigo:{codigo:string}):Observable<string>{
    return this.http.post<string>(`${this.url}proyecto/${idProyecto}/modificar/codigo`,codigo)
  }
//
  modificarProyectoUsuario(idProyecto:number,usuario:{usuario:number}):Observable<string>{
    return this.http.post<string>(`${this.url}proyecto/${idProyecto}/modificar/usuario`,usuario)
  }
  //
  modificarProyectoAprobado(idProyecto:number,data:models.ModelModificarAprobadoProyecto):Observable<string>{
    return this.http.post<string>(`${this.url}proyecto/${idProyecto}/actualizacion/aprobado`, data)
  }
  //
  AumentarProyectoDesdeLaComisionDeLosProyectos(idProyecto:number,data:models.AumentarProyectoDesdeLaComision):Observable<string>{
    return this.http.post<string>(`${this.url}proyecto/${idProyecto}/aumentar/aprobado/comision`,data)
  }
  //
  registrarConcepto(data:models.CrearNuevoConceptoInterface):Observable<string>{
    return this.http.post<string>(`${this.url}conceptos/add`,data)
  }
  eliminarConcepto(idConcepto:number):Observable<string>{
    return this.http.delete<string>(`${this.url}conceptos/${idConcepto}/eliminar`)
  }
  conceptosTodos():Observable<models.CrearNuevoConceptoInterface[]>{
    return this.http.get<models.CrearNuevoConceptoInterface[]>(`${this.url}conceptos`)
  }
//
  registarBanco(data:models.CrearBancoModel):Observable<string>{
    return this.http.post<string>(`${this.url}bancos/add`,data)
  }
  eliminarBanco(id:number):Observable<string>{
    return this.http.delete<string>(`${this.url}bancos/${id}/eliminar`)
  }
  todosLosBancos():Observable<models.bancosModel[]>{
    return this.http.get<models.bancosModel[]>(`${this.url}bancos`)
  }







/* codigo informacion usuario  */



  /* SELECTORS STATE */

  selectRegisterProjectState():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.registrarProyectoState)
  }
  SelectUsersSolicitantesState():Observable<AdminsStateModel>{
    return this.store.select(selectors.getListUsersSolicitante)
  }
  SelectProjectsAll():Observable<modelsState.PaginateProjectsState>{
    return this.store.select(selectors.ProjectsAllPaginatesOrNot)
  }
  SeleccionaProyectoEspecifico():Observable<modelsState.ProyectoEspecificoState>{
    return this.store.select(selectors.TomaProyectoEspecificoState)
  }
  //modificar
  SeleccionarModificarInfoProyecto():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarModificarInfoProyecto)
  }
  SeleccionarModificarCodigoProyecto():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarModificarCodigoProyecto)
  }
  SeleccionarModificarUsuarioProyecto():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarModificarUsuarioProyecto)
  }
  //Modificar aprobado
  SeleccionarModificarAprobadoProyecto():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarModificarAprobadoProyecto)
  }
  SeleccionarAumentarProyectoDesdeComision():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarAumentarProyectoDesdeComision)
  }
  //CONCEPTOS
  SeleccionarConceptoEliminarRegistrar():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarConceptoRegistrarEliminar)
  }
  SeleccionarTodosLosConceptos():Observable<modelsState.ConceptosState>{
    return this.store.select(selectors.TomarConceptosTodos)
  }
  SeleccionarEliminarRegistrarBanco():Observable<modelsState.RegisterProjectState>{
    return this.store.select(selectors.TomarBancosEliminarRegistrar)
  }

  //bancos
  SeleccionarTodosLosBancos():Observable<modelsState.BancosState>{
    return this.store.select(selectors.Todoslosbancos)
  }

  /* DISPATCH PROJECTS */
  RestoreStateRegisterProject(){
    this.store.dispatch(actions.Complete_Register_Project())
  }
  loadStateRegisterProject(data:models.ProjectModel){
    this.store.dispatch(actions.Load_Register_Project({ dataProject:data }))
  }
  loadUsersSolicitante(){
    this.store.dispatch(actions.Load_Users_Solicitantes())
  }
  cargarProyectoEspecifico(id:number, modal:boolean = true){
    this.store.dispatch(actions.Cargar_Proyecto_Especifico({id:id, modal:modal}))
  }
  //Modificar
  ModificarProyectoInfo(idProyecto:number,data:models.ModelModificarDatosInformacion){
    this.store.dispatch(actions.Cargar_Modificar_Informacion_Proyecto({id:idProyecto,informacion:data}))
  }
  RestaurarStateModificarProyectoInfo(){
    this.store.dispatch(actions.Reiniciar_Modificar_Informacion_Proyecto());
  }
  //
  ModificarProyectoCodigo(idProyecto:number,data:{codigo:string}){
    this.store.dispatch(actions.Cargar_Modificar_Codigo_Proyecto({id:idProyecto, modificarCodigo:data}))
  }
  RestaurarStateModificarProyectoCodigo(){
    this.store.dispatch(actions.Reiniciar_Modificar_Codigo_Proyecto())
  }
  // modificar usuario
  ModificarProyectoUsuario(idProyecto:number,data:{usuario:number}){
    this.store.dispatch(actions.Cargar_Modificar_Usuario_Proyecto({id:idProyecto,modificarUsuario:data }))
  }
  RestaurarStateModificarProyectoUsuario(){
    this.store.dispatch(actions.Reiniciar_Modificar_Usuario_Proyecto())
  }

  // modificar aprobado
  ModificarProyectoAprobado(id:number,data:models.ModelModificarAprobadoProyecto){
    this.store.dispatch(actions.Cargar_Modificar_Aprobado_Proyecto({datosModificar:data,id:id}))
  }

  RestaurarProyectoAprobado(){
    this.store.dispatch(actions.Reiniciar_Modificar_Aprobado_Proyecto())
  }
  // aumentar aprobado desde el proyecto comision
  AumentarAprobadoProyectoDesdeElProyectoComision(id:number,datos:models.AumentarProyectoDesdeLaComision){
    this.store.dispatch(actions.Cargar_Modificar_Aprobado_Desde_ComisionProyecto({id,datos}))
  }
  restaurarAumentarAprobadoProyectoDesdeElProyectoComision(){
    this.store.dispatch(actions.Reiniciar_Modificar_Aprobado_Desde_ComisionProyecto())
  }

  //Projects

  loadProjectsAllPaginados(){
    this.store.dispatch(actions.Load_Projects_AllPaginate())
  }
  cargarProyectosXnombre(valor:string){
    this.store.dispatch(actions.Load_Projects_Search({valor:valor}))
  }
  loadProjectsAllPaginatePage(url:string){
    this.store.dispatch(actions.LoadPaginate_Projects_AllPaginate({paginate:url}))
  }
  loadProjectsAllSinPaginar(){
    this.store.dispatch(actions.Load_Projects_All())
  }

  //CONCEPTOS
  cargarRegistroConcepto(data:models.CrearNuevoConceptoInterface){
    this.store.dispatch(actions.Cargar_Registro_Concepto({concepto:data}))
  }
  cargarEliminarConcepto(id:number){
    this.store.dispatch(actions.Cargar_Eliminar_Concepto({idConcepto:id}))
  }
  reiniciarRegistroConcepto(){
    this.store.dispatch(actions.Reiniciar_Registro_Concepto())
  }

  BuscarTodosLosConceptos(){
    this.store.dispatch(actions.Cargar_Todos_Conceptos())
  }

  //BANCOS
  cargarRegistroBanco(banco:models.CrearBancoModel):void{
    this.store.dispatch(actions.Cargar_Registro_Banco({data:banco}))
  }
  cargarEliminarBanco(id:number):void{
    this.store.dispatch(actions.Cargar_Eliminar_Banco({id:id}))
  }
  ReiniciarRegistroEliminarBanco():void{
    this.store.dispatch(actions.Reiniciar_Registro_Banco())
  }

  CargarTodosLosBancos():void{
    this.store.dispatch(actions.Cargar_Todos_Los_Bancos())
  }


  /* MODALES DEL MODULO PROYECTOS */
  mostrarModalInfoProyecto(data:models.ProjectModelComplete){
    return this.dialog.open(DetalleProyectoModalComponent, {
      width: '1000px',
      data:data,
      disableClose:true
    });
  }



  /* egreso directo */

  EgresoDirecto(idProyecto:number,data):Observable<any>{
    return this.http.post(`${this.url}egreso/directo/proyecto/${idProyecto}`, data)
  }

  SeleccionarEgresoDirecto():Observable<BasicDatas>{
    return this.store.select(selectors.EgresoDirecto);
  }

  CargarEgresoDirecto(id:number,data):void{
    this.store.dispatch(actions.Cargar_Egreso_Directo_Proyecto({egresoDatos:data,id:id}))
  }



}
