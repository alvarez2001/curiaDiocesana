import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { SharedService } from 'src/app/services/shared/shared.service';
import { SolicitudsService } from "../services/solicituds.service";

import * as actions from "./solicituds.actions";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadOff, loadOn } from 'src/app/actions/app-actions';
import { Store } from '@ngrx/store';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { ModalesService } from '../services/modales.service';

@Injectable()
export class SolicitudsEffectsModule {


  CargarSolicitudesPorAsigar = createEffect(()=>this.actions$.pipe(
    ofType(actions.CargarSolicitudesPorAsignarTasa),
    mergeMap(()=>this.solicitudSvc.SolicitudesPorAsignarTasa().pipe(
      map(value => actions.CorrectoSolicitudesLista({data:value})),
      catchError(error => of(actions.FallidoSolicitudesLista({error:error})))
    ))
  ));

  CargarSolicitudesPorRevision = createEffect(()=>this.actions$.pipe(
    ofType(actions.CargarSolicitudesPorRevision),
    mergeMap(()=>this.solicitudSvc.SolicitudesPorRevision().pipe(
      map(value => actions.CorrectoSolicitudesLista({data:value})),
      catchError(error => of(actions.FallidoSolicitudesLista({error:error})))
    ))
  ));

  CargarSolicitudesRevisadas = createEffect(()=>this.actions$.pipe(
    ofType(actions.CargarSolicitudesRevisadas),
    mergeMap(()=>this.solicitudSvc.SolicitudesRevisadas().pipe(
      map(value => actions.CorrectoSolicitudesLista({data:value})),
      catchError(error => of(actions.FallidoSolicitudesLista({error:error})))
    ))
  ));

  CargarSolicitudesPorAutorizacion = createEffect(()=>this.actions$.pipe(
    ofType(actions.CargarSolicitudesPorAutorizacion),
    mergeMap(()=>this.solicitudSvc.SolicitudesRevisadas().pipe(
      map(value => actions.CorrectoSolicitudesLista({data:value})),
      catchError(error => of(actions.FallidoSolicitudesLista({error:error})))
    ))
  ));

  CargarSolicitudesPorEjecutado = createEffect(()=>this.actions$.pipe(
    ofType(actions.CargarSolicitudesPorEjecutado),
    mergeMap(()=>this.solicitudSvc.SolicitudesEjecutado().pipe(
      map(value => actions.CorrectoSolicitudesLista({data:value})),
      catchError(error => of(actions.FallidoSolicitudesLista({error:error})))
    ))
  ));

  CargarSolicitudesRechazadas = createEffect(()=>this.actions$.pipe(
    ofType(actions.CargarSolicitudesRechazadas),
    mergeMap(()=>this.solicitudSvc.SolicitudesRechazadas().pipe(
      map(value => actions.CorrectoSolicitudesLista({data:value})),
      catchError(error => of(actions.FallidoSolicitudesLista({error:error})))
    ))
  ));

  FallidoSolicitudesLista = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoSolicitudesLista),
    mergeMap(({error})=>of(this.sharedSvc.mostrarAlertError(error)))
  ), { dispatch:false })

  CargarAsignarTasa = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarAsignarTasa),
    mergeMap(({idSolicitud,tasa})=>{
      this.store.dispatch(loadOn())
      return this.solicitudSvc.AsignarTasaSolicitud(idSolicitud,tasa).pipe(
        map(value => {
          if(tasa.codigo){
            this.solicitudNgrxSvc.IntroducirClaveCorrecta();
          }
          return actions.CorrectoAsignarTasa({correcto:value})
        }),
        catchError(error => of(actions.FallidoAsignarTasa({error, comprobar:tasa})))
      )
    })
  ))

  CorrectoAsignarTasa = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoAsignarTasa),
    mergeMap(({correcto})=>{
      this.sharedSvc.mostrarAlertSuccess(correcto)
      return of(loadOff())
    })
  ))

  FallidoAsignarTasa = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoAsignarTasa),
    mergeMap(({error, comprobar})=>{


      if(error.status === 422 && !comprobar.codigo){
        this.sharedSvc.ConfirmarGenerarCodigo(error.error).then((result) => {
          if (result.value) {
          this.solicitudNgrxSvc.CargarStateGenerarCodigo();
          }else{
            this.solicitudNgrxSvc.ReiniciarAsignarTasa();
          }
        })
      }else{
        this.sharedSvc.mostrarAlertError(error)
        this.solicitudNgrxSvc.ReiniciarAsignarTasa();
      }

      return of(loadOff())
    })
  ))

  CargarStateGenerarCodigo = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarGenerarCodigoAumentoTasa),
    mergeMap(()=>{
      this.store.dispatch(loadOn())
      return this.solicitudSvc.generarCodigo().pipe(
        map(value => actions.CorrectoGenerarCodigoAumentoTasa({correcto:value})),
        catchError(error => of(actions.FallidoGenerarCodigoAumentoTasa({error:error})))
      )
    })
  ))

  CorrectoGenerarCodigo = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoGenerarCodigoAumentoTasa),
    mergeMap(({correcto})=>{
      this.sharedSvc.mostrarAlertSuccess(correcto).then(result => {
        this.solicitudNgrxSvc.IntroducirClaveTasa()
      })
      return of(loadOff())
    })
  ))

  FallidoGenerarCodigo = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoGenerarCodigoAumentoTasa),
    mergeMap(({error}) => {
      this.sharedSvc.mostrarAlertError(error)
      this.solicitudNgrxSvc.ReiniciarAsignarTasa()
      return of(loadOff())
    })
  ))





  CargarRevisarSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarRevisarSolicitud),
    mergeMap(({solicitud})=>this.solicitudSvc.revisarSolicitud(solicitud).pipe(
      map(value => actions.CorrectoProcesoSolicitud({correcto:value})),
      catchError(error => of(actions.FallidoProcesoSolicitud({error:error})))
    ))
  ))

  CargarAutorizarSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarAutorizarSolicitud),
    mergeMap(({solicitud})=>this.solicitudSvc.autorizarSolicitud(solicitud).pipe(
      map(value => actions.CorrectoProcesoSolicitud({correcto:value})),
      catchError(error => of(actions.FallidoProcesoSolicitud({error:error})))
    ))
  ))

  CargarRechazarSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarRechazarSolicitud),
    mergeMap(({solicitud})=>this.solicitudSvc.rechazarSolicitud(solicitud).pipe(
      map(value => actions.CorrectoProcesoSolicitud({correcto:value})),
      catchError(error => of(actions.FallidoProcesoSolicitud({error:error})))
    ))
  ))



  CorrectoProcesoSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoProcesoSolicitud),
    mergeMap(({correcto})=>{
      this.sharedSvc.mostrarAlertSuccess(correcto)
      return of(loadOff())
    })
  ))

  FallidoProcesoSolicitud = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoProcesoSolicitud),
    mergeMap(({error})=>{
      this.sharedSvc.mostrarAlertError(error)
      return of(loadOff())
    })
  ))


  constructor(private actions$:Actions, private sharedSvc:SharedService, private solicitudSvc:SolicitudsService, private store:Store, private solicitudNgrxSvc:SolicitudsNgrxService, private modalesSvc:ModalesService){}
}
