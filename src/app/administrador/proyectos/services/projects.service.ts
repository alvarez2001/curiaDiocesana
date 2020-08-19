import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from "../ngrxStates/proyectos.actions";
import * as models from "../models/project.models";
import * as modelsState from '../models/ngrxModelsProjects';
import * as selectors from '../ngrxStates/proyectos.features';
import { HttpClient } from '@angular/common/http';
import { Global } from 'src/app/services/Global';
import { Observable, of } from 'rxjs';
import { UserModel, AdminsStateModel } from '../../usuarios/models/usersInactive.models';
import { map } from 'rxjs/operators';
import { DetalleProyectoModalComponent } from '../detalle-proyecto-modal/detalle-proyecto-modal.component';
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

  InformacionDelProyecto(id:number):Observable<models.ProjectModelComplete>{
    return this.http.get<models.ProjectModelComplete>(`${this.url}informacion/proyecto/${id}`)
  }

  modificarProyectoInfo(idProyecto:number,data:models.ModelModificarDatosInformacion):Observable<string>{
    return this.http.post<string>(`${this.url}proyecto/${idProyecto}/modificar/informacion`,data)
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

  //Projects
  loadProjectsAllPaginados(){
    this.store.dispatch(actions.Load_Projects_AllPaginate())
  }
  loadProjectsAllPaginatePage(url:string){
    this.store.dispatch(actions.LoadPaginate_Projects_AllPaginate({paginate:url}))
  }
  loadProjectsAllSinPaginar(){
    this.store.dispatch(actions.Load_Projects_All())
  }

  /* MODALES DEL MODULO PROYECTOS */
  mostrarModalInfoProyecto(data:models.ProjectModelComplete){
    return this.dialog.open(DetalleProyectoModalComponent, {
      width: '1000px',
      data:data
    });
  }
}
