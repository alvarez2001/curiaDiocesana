import { createAction, props } from '@ngrx/store';
import { userDataInterface, userRecoveryPassword, userLoginInterface } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

export const loadRegister = createAction('[Register Component] load', props<{userData:userDataInterface}>());
export const registerSuccess = createAction('[Register Component] register success',props<{successData:string}>());
export const registerFailed = createAction('[Register Component] register failed',props<{failedData:HttpErrorResponse}>());

/* ------------------------------ */

export const loadRecoveryPassword = createAction('[Recuperar-Password Component] load', props<{userRecovery:userRecoveryPassword}>());

export const SuccessRecoveryPassword = createAction('[Recuperar-Password Component] recovery success',props<{successData:string}>());

export const FailedRecoveryPassword = createAction('[Recuperar-Password Component] recovery failed',props<{failedData:HttpErrorResponse}>());




export const loadLoginUser = createAction('[Inicio-Sesion Component] load',props<{userLogin:userLoginInterface}>())
export const successLoginUser = createAction('[Inicio-Sesion Component] success',props<{successData:string}>())
export const failedLoginUser = createAction('[Inicio-Sesion Component] failed',props<{failedData:HttpErrorResponse}>())


export const loadDetailUser = createAction('[Inicio-sesion Component] detailUser load')
export const successDetailUser = createAction('[Inicio-sesion Component] detailUser success',props<{successData}>())
export const failedDetailUser = createAction('[Inicio-sesion Component] detailUser failed',props<{failedData}>())
