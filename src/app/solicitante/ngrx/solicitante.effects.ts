import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { SolicitanteServiceService } from '../services/solicitante-service.service';
import * as actions from "./solicitante.actions";
import { SharedService } from 'src/app/services/shared/shared.service';
import { Store } from '@ngrx/store';
import { loadOn, loadOff } from 'src/app/actions/app-actions';

@Injectable()
export class SolicitantesEffects {


  //proyectos solicitantes solicitud

  CargarProyectosSolicitantesSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Cargar_Proyectos_Solicitante),
    mergeMap(()=>this.solicitudSvc.proyectosSolicitante().pipe(
      map(value => actions.Correcto_Proyectos_Solicitante({proyectos:value})),
      catchError(error => of(actions.Fallido_Proyectos_Solicitantes({error:error})))
    ))
  ))

  CargarConceptosSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarConceptosSolicitantes),
    mergeMap(()=>this.solicitudSvc.ConceptosSolicitantes().pipe(
      map(value => actions.CorrectoConceptosSolicitantes({solicitantes:value})),
      catchError(error => of(actions.FallidoConceptosSolicitantes({error:error})))
    ))
  ))

  CargarGuardarSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarGuardarSolicitud),
    mergeMap(({idBanco,idProyecto,solicitud})=>{
      this.store.dispatch(loadOn())
      return this.solicitudSvc.registrarSolicitud(idProyecto,idBanco,solicitud).pipe(
        map(value => actions.CorrectoGuardarSolicitud({correcto:value})),
        catchError(error=>of(actions.FallidoGuardarSolicitud({error:error})))
      )
    })
  ))

  CorrectoGuardarSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoGuardarSolicitud),
    mergeMap( ({correcto})=>{
      this.sharedSvc.redirigirDondeQuiera('/solicitante')
      this.sharedSvc.mostrarAlertSuccess(correcto)
      return of(loadOff())
    })
  ))

  FallidoGuardarSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoGuardarSolicitud),
    mergeMap(({error})=>{
      this.sharedSvc.mostrarAlertError(error);
      return of(loadOff())
    })
  ))



  constructor(private actions$:Actions, private solicitudSvc:SolicitanteServiceService, private sharedSvc:SharedService, private store:Store){}
}
