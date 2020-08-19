import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from "./proyectos.actions";
import { Store } from '@ngrx/store';
import { ProjectsService } from '../services/projects.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';
import { loadOn, loadOff } from 'src/app/actions/app-actions';

@Injectable()
export class ProjectsEffects {


  loadProjectRegister = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Load_Register_Project),
    mergeMap(({dataProject})=>this.projectSvc.registerProject(dataProject).pipe(
      map((value)=>actions.Success_Register_Project({successData:value})),
      catchError(error => of(actions.Failed_Register_Project({FailedData:error})))
    ))
  ))

  FailedProjectRegister = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Failed_Register_Project),
    mergeMap(({FailedData}) => of(this.sharedSvc.mostrarAlertError(FailedData)))
  ),{dispatch:false})


  loadUsersSolicitante = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Load_Users_Solicitantes),
    mergeMap(() => this.projectSvc.UsuariosSolicitantesLista().pipe(
      map((value)=> actions.Success_Users_Solicitantes({users:value})),
      catchError(error => of(actions.Failed_Users_Solicitantes(error)))
    ))
  ))

  FailedUsersSolicitante = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Failed_Users_Solicitantes),
    mergeMap(({failedData})=>of(this.sharedSvc.mostrarAlertError(failedData)))
  ),{dispatch:false})



    /* PROJECTS */

    Load_Projects_AllPaginate = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Load_Projects_AllPaginate),
      mergeMap(()=>this.projectSvc.proyectosPaginados().pipe(
        map(value => actions.Success_Projects_AllPaginate({projects:value})),
        catchError(error => of(actions.Failed_Projects_AllPaginate({FailedData:error})))
      ))
    ))

    LoadPaginate_Projects_AllPaginate = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.LoadPaginate_Projects_AllPaginate),
      mergeMap(({paginate})=>this.projectSvc.PaginateProjects(paginate).pipe(
        map(value => actions.Success_Projects_AllPaginate({projects:value})),
        catchError(error => of(actions.Failed_Projects_AllPaginate({FailedData:error})))
      ))
    ))

    Load_Projects_All = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Load_Projects_All),
      mergeMap(()=>this.projectSvc.proyectosSinPaginar().pipe(
        map(value => actions.Success_Projects_AllPaginate({projects:value})),
        catchError(error => of(actions.Failed_Projects_AllPaginate({FailedData:error})))
      ))
    ))



    //ESPECIFICO

    CargarProyectoEspecifico = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Cargar_Proyecto_Especifico),
      mergeMap(({id, modal})=>{
        this.store.dispatch(loadOn())
        return this.projectSvc.InformacionDelProyecto(id).pipe(
          map(value => actions.Correcto_Proyecto_Especifico({proyecto:value, modal:modal})),
          catchError(error => of(actions.Fallo_Proyecto_Especifico({fallida:error, modal:modal})))
        )
      })
    ))


    CorrectoProyectoEspecifico = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Correcto_Proyecto_Especifico),
      mergeMap(({proyecto, modal})=> {
        if(modal){
          this.projectSvc.mostrarModalInfoProyecto(proyecto)
        }
        return of(loadOff())
      })
    ))

    FalloProyectoEspecifico = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Fallo_Proyecto_Especifico),
      mergeMap(({fallida, modal})=>{

        if(!modal && fallida.status === 404){
          this.sharedSvc.redirigirDondeQuiera('administrador/proyectos/listar-proyectos')
        }
        else{
          this.sharedSvc.mostrarAlertError(fallida)
        }
        return of(loadOff())
      })
    ))

      /* MODIFICAR PROYECTO */

    CargarModificarProyectoInfo = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Informacion_Proyecto),
      mergeMap(({id,informacion})=>this.projectSvc.modificarProyectoInfo(id,informacion).pipe(
        map(value => actions.Correcto_Modificar_Informacion_Proyecto({successData:value})),
        catchError(error => of(actions.Fallido_Modificar_Informacion_Proyecto({failedData:error})))
      ))
    ))

    FallidoModificarProyectoInfo = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Fallido_Modificar_Informacion_Proyecto),
      mergeMap(({failedData})=>of(this.sharedSvc.mostrarAlertError(failedData)))
    ),{dispatch:false})


    CargarModificarProyectoCodigo = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Codigo_Proyecto),
      mergeMap(({id,modificarCodigo})=>this.projectSvc.modificarProyectoCodigo(id,modificarCodigo).pipe(
        map(val => actions.Correcto_Modificar_Codigo_Proyecto({successData:val})),
        catchError(error => of(actions.Fallido_Modificar_Codigo_Proyecto({failedData:error})))
      ))
    ))


    FallidoModificarProyectoCodigo = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Fallido_Modificar_Codigo_Proyecto),
      mergeMap(({failedData})=>of(this.sharedSvc.mostrarAlertError(failedData)))
    ),{dispatch:false})


    CargarModificarProyectoUsuario = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Usuario_Proyecto),
      mergeMap(({id,modificarUsuario})=>this.projectSvc.modificarProyectoUsuario(id,modificarUsuario).pipe(
        map(val => actions.Correcto_Modificar_Usuario_Proyecto({successData:val})),
        catchError(error => of(actions.Fallido_Modificar_Usuario_Proyecto({failedData:error})))
      ))
    ))


    FallidoModificarProyectoUsuario = createEffect(()=>
    this.actions$.pipe(
      ofType(actions.Fallido_Modificar_Usuario_Proyecto),
      mergeMap(({failedData})=>of(this.sharedSvc.mostrarAlertError(failedData)))
    ),{dispatch:false})


  constructor(private actions$:Actions,private store:Store,private projectSvc:ProjectsService, private sharedSvc:SharedService){}
}
