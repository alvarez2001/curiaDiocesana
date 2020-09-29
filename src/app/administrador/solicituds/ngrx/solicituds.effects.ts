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
import { Global } from 'src/app/services/Global';

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
    mergeMap(()=>this.solicitudSvc.SolicitudesPorAutorizacion().pipe(
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


  CargarReporteListadoPorDia = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarReportePorDia),
    mergeMap(({fecha})=>this.solicitudSvc.ListarReportesPorDia({fecha:fecha}).pipe(
      map(value => actions.CorrectoReportePorDia({data:value})),
      catchError(error => of(actions.FallidoReportePorDia({error:error})))
    ))
  ))

  CargarReporteListadoPorDiaIngresos = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarReportePorDiaIngresos),
    mergeMap(({fecha})=>this.solicitudSvc.ListarReportesPorDiaIngresos({fecha:fecha}).pipe(
      map(value => actions.CorrectoReportePorDia({data:value})),
      catchError(error => of(actions.FallidoReportePorDia({error:error})))
    ))
  ))

  CargarReportePorDiaEgresosDirecto = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarReportePorDiaEgresosDirecto),
    mergeMap(({fecha})=>this.solicitudSvc.ListarReportesPorDiaEgresosDirecto({fecha:fecha}).pipe(
      map(value => actions.CorrectoReportePorDia({data:value})),
      catchError(error => of(actions.FallidoReportePorDia({error:error})))
    ))
  ))

  FallidoReporteListadoPorDia = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoReportePorDia),
    mergeMap(({error})=>{

      return of(this.sharedSvc.mostrarAlertError(error))
    })
  ),{dispatch:false})

  /* CargarBusquedaPersonalizadReporte = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarBusquedaPersonalizada),
    mergeMap(({busqueda})=>)
  ),{dispatch:false}) */


  CargarRegistrarOperacion = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarRegistrarOperacion),
    mergeMap(({data,idSolicitud})=>this.solicitudSvc.RegistrarOperacion(data,idSolicitud).pipe(
      map(response => {
        this.solicitudSvc.mostrarInfoEgreso(response.id)
        return actions.CorrectoRegistrarOperacion({correcto:response.mensaje})
      }),
      catchError(error => of(actions.FallidoRegistrarOperacion({error:error})))
    ))
  ))

  FallidoRegistrarOperacion = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoRegistrarOperacion),
    mergeMap(({error})=>of(this.sharedSvc.mostrarAlertError(error)))
  ), {dispatch:false})


  CorrectoRegistrarOperacion = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoRegistrarOperacion),
    mergeMap(({correcto})=>of(this.sharedSvc.mostrarAlertSuccess(correcto)))
  ), {dispatch:false})


  CargarInforEgresoDetallado = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarEgresoDetallado),
    mergeMap(({idEgreso})=>{
      this.store.dispatch(loadOn());
      return this.solicitudSvc.buscarEgresoPorId(idEgreso).pipe(
        map(value => actions.CorrectoEgresoDetallado({correcto:value})),
        catchError(error => of(actions.FallidoEgresoDetallado({error})))
      )
    })
  ))

  CorrectoInfoEgresoDetallado = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoEgresoDetallado),
    mergeMap(({correcto}) => {
      this.modalesSvc.ModalInfoEgreso(correcto)
      return of(loadOff())
    })
  ))

  FallidoInfoEgresoDetallado = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoEgresoDetallado),
    mergeMap(({error})=>{
      this.sharedSvc.mostrarAlertError(error)
      return of(loadOff());
    })
  ))


  CargarAnularEgreso = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarAnularEgreso),
    mergeMap(({idEgreso})=>this.solicitudSvc.anularUnEgresoPorId(idEgreso).pipe(
      map(value => actions.CorrectoAnularEgreso({correcto:value})),
      catchError(error => of(actions.FallidoAnularEgreso({error:error})))
    ))
  ))

  CorrectoAnularEgreso = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CorrectoAnularEgreso),
    mergeMap(({correcto})=>of(this.sharedSvc.mostrarAlertSuccess(correcto)))
  ),{dispatch:false})

  FallidoAnularEgreso = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FallidoAnularEgreso),
    mergeMap(({error})=>of(this.sharedSvc.mostrarAlertError(error)))
  ),{dispatch:false})


  constructor(private actions$:Actions, private sharedSvc:SharedService, private solicitudSvc:SolicitudsService, private store:Store, private solicitudNgrxSvc:SolicitudsNgrxService, private modalesSvc:ModalesService){}
}
