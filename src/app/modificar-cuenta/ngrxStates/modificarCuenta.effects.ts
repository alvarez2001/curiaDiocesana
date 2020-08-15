import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from "./modificarCuenta.actions";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ModificarCuentaServiceService } from "../services/modificar-cuenta-service.service";
import { of } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Injectable()
export class ModificarCuentaModuleEffects {



  ChargueDetailUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.ChargeDetailUser),
    mergeMap(()=>this.loginSvc.detailDataUser().pipe(
      map((val)=> actions.SuccessDetailUser({successData:val})),
      catchError((error)=> of(actions.FailedDetailUser({failedData:error})))
    ))
  ))


  SuccessDetailUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.SuccessDetailUser),
    mergeMap(({successData})=>of(this.loginSvc.setDetailUserStorage(successData)))
  ),{dispatch:false})


 FailedDetailUser = createEffect(()=>
 this.actions$.pipe(
   ofType(actions.FailedDetailUser),
   mergeMap(({failedData}) => of(this.sharedSvc.mostrarAlertError(failedData)))
 ),{dispatch:false})


  CargarModificarCuenta = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.CargarModificarDatosCuenta),
    mergeMap(({modifiedData})=>this.modificarCuentaSvc.actualizarData(modifiedData).pipe(
      map((val) => actions.SuccessModificarDatosCuenta({successData:val})),
      catchError(error => of(actions.FailedModificarDatosCuenta({failedData:error})))
    ))
  ));

  SuccessModificarCuenta = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.SuccessModificarDatosCuenta),
    mergeMap(({successData})=>{

      return of(this.sharedSvc.mostrarAlertSuccess(successData))
    })
  ),
  {dispatch:false})

  FailedModificarCuenta = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FailedModificarDatosCuenta),
    mergeMap(({failedData})=>of(this.sharedSvc.mostrarAlertError(failedData)))
  ),{dispatch:false})



  LoadChangePasswords = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.LoadChangePassword),
    mergeMap(({passwords})=> this.modificarCuentaSvc.actualizarPassword(passwords).pipe(
      map((val)=> actions.successChangePassword({successData:val})),
      catchError((error) => of(actions.FailedChangePassword({failedData:error})))
    ))
  ))

  SuccessChangePasswords = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.successChangePassword),
    mergeMap(({successData})=> of(this.sharedSvc.mostrarAlertSuccess(successData)))
  ),{dispatch:false})

  FailedChangePasswords = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.FailedChangePassword),
    mergeMap(({failedData})=>of(this.sharedSvc.mostrarAlertError(failedData)))
  ),{dispatch:false})



  constructor(private actions$:Actions,private store:Store, private modificarCuentaSvc:ModificarCuentaServiceService,private sharedSvc:SharedService, private loginSvc:LogRegService){}
}
