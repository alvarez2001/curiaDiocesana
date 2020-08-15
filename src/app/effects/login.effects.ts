import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { LogRegService } from "../services/login/log-reg.service";
import { loadOn, loadOff } from "../actions/app-actions";
import { registerFailed,registerSuccess,SuccessRecoveryPassword,FailedRecoveryPassword, successLoginUser, failedLoginUser, successDetailUser, failedDetailUser,loadDetailUser } from "../actions/login.actions";
import { of } from 'rxjs';
import { Store } from "@ngrx/store";
import { SharedService } from '../services/shared/shared.service';
import * as actions from "../actions/login.actions";

@Injectable()
export class LoginEffects {


  /*-------------------- REGITER USER --------------- */
  loadRegisterUserSolicitante$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Register Component] load'),
      mergeMap((data:any)=> {
        this.store.dispatch(loadOn());
        return this.loginSvc.crearUsuarioSolicitante(data.userData).pipe(
          map((value) => {
            this.sharedSvc.redirigirDondeQuiera('/');
            return registerSuccess({successData:value});
          }),
          catchError(error => {
            return of(registerFailed({failedData:error}));
          })
        );
      }),
    ));

  successRegisterUserSolicitante = createEffect( () =>
    this.action$.pipe(
      ofType('[Register Component] register success'),
      mergeMap((data:any) => {
        return of(this.sharedSvc.mostrarAlertSuccess(data.successData)).pipe(
          map((val)=> loadOff())
        )
      })
    ));

  errorRegisterUserSolicitante = createEffect( () =>
  this.action$.pipe(
    ofType('[Register Component] register failed'),
    mergeMap((data:any) => {
      return of(this.sharedSvc.mostrarAlertError(data.failedData)).pipe(
        map(val => loadOff())
      )
    })
  ));

  /* -----------recovery password------------ */

  loadRecoveryPassword = createEffect(() => this.action$.pipe(
    ofType('[Recuperar-Password Component] load'),
    mergeMap((data:any) => {
      this.store.dispatch(loadOn());
      return this.loginSvc.recuperarPassword(data.userRecovery).pipe(
        map(val => SuccessRecoveryPassword({successData:val})),
        catchError(error => {
          return of(FailedRecoveryPassword({failedData:error}));
        })
      )
    })
  ));

  successRecoveryPassword = createEffect(()=> this.action$.pipe(
    ofType('[Recuperar-Password Component] recovery success'),
    mergeMap((data:any) => of(this.sharedSvc.mostrarAlertSuccess(data.successData)).pipe(
      map( val => {
        this.sharedSvc.redirigirDondeQuiera('/');
        return loadOff()
      })
    ))
  ));


  failedRecoveryPassword = createEffect(()=> this.action$.pipe(
    ofType('[Recuperar-Password Component] recovery failed'),
    mergeMap((data:any) => of(this.sharedSvc.mostrarAlertError(data.failedData)).pipe(
      map( val => loadOff())
    ))
  ));

  /* -------Login user-------- */

  loadLoginUser = createEffect(() =>
  this.action$.pipe(
    ofType('[Inicio-Sesion Component] load'),
    tap(() => this.store.dispatch(loadOn())),
    mergeMap((data:any) => this.loginSvc.loguearse(data.userLogin).pipe(
        map(val => successLoginUser({successData:val})),
        catchError(error => of(failedLoginUser({failedData:error})))
      ))
  ));

  successLoginUser = createEffect(()=>
  this.action$.pipe(
    ofType('[Inicio-Sesion Component] success'),
    mergeMap((data:any) => of(this.loginSvc.setSessionStorage(data.successData)).pipe(
      map( val => {
        return loadDetailUser()
      })
    ))
  ));

  failedLoginUser = createEffect(() =>
  this.action$.pipe(
    ofType('[Inicio-Sesion Component] failed'),
    mergeMap((data:any) => of(this.sharedSvc.mostrarAlertError(data.failedData)).pipe(
      map(val => loadOff())
    ))
  ))

  /* ------------------DETAIL USER------------------ */

  loadDetailUser = createEffect(()=>
  this.action$.pipe(
    ofType('[Inicio-sesion Component] detailUser load'),
    tap(()=> this.store.dispatch(loadOn())),
    mergeMap((data:any) => {

      return this.loginSvc.detailDataUser().pipe(
        map(val => successDetailUser({successData:val})),
        catchError(error => of(failedDetailUser({failedData:error})))
      )
    })
  ))


  successDetailUser = createEffect(()=>
  this.action$.pipe(
    ofType('[Inicio-sesion Component] detailUser success'),
    mergeMap((data:any) => {

      return of(this.loginSvc.setDetailUser(data.successData)).pipe(
        map(val => loadOff())
      )
    })
  ));


  failedDetailUser = createEffect(()=> this.action$.pipe(
    ofType('[Inicio-sesion Component] detailUser failed'),
    mergeMap((data:any) => {
      this.loginSvc.cleanSessionStorage();
      return of(this.sharedSvc.mostrarAlertError(data.failedData)).pipe(
        map(val => loadOff())
      )
    })
  ))


  /* LOGOUT USER */

  LoadLogoutUser = createEffect(()=>
  this.action$.pipe(
    ofType(actions.LoadLogoutUser),
    tap(()=> loadOn()),
    mergeMap(()=>this.loginSvc.logoutUser().pipe(
      map((val) => actions.SuccessLogoutUser({successData:val.message})),
      catchError((error )=> of(actions.FailedLogoutUser(error)))
    ))
  ))

  SuccessLogoutUser = createEffect(()=>
  this.action$.pipe(
    ofType(actions.SuccessLogoutUser),
    mergeMap(({successData})=> {
      return of(this.sharedSvc.mostrarAlertSuccess(successData)).pipe(
        map( val => {
          this.sharedSvc.redirigirDondeQuiera('/')
          this.loginSvc.cleanSessionStorage()
          return loadOff();
        })
      )
    })
  ))

  FailedLogoutUser = createEffect(()=>
  this.action$.pipe(
    ofType(actions.FailedLogoutUser),
    mergeMap(({failedData})=> of(this.sharedSvc.mostrarAlertError(failedData)).pipe(
      map(val => loadOff())
    ))
  ))

  constructor(private store:Store<{pantallaCarga:boolean}>,private action$:Actions, private loginSvc:LogRegService,private sharedSvc:SharedService){}
}
