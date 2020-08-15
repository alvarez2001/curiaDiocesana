import { props, createAction } from "@ngrx/store";
import { UserModel } from 'src/app/administrador/usuarios/models/usersInactive.models';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangePasswordInterface } from '../models/stateModificarData.interface';

export const keyStoreModuleModificarCuenta = 'MODIFICAR_CUENTA_ADMIN';

export const CargarModificarDatosCuenta = createAction('[MODIFICAR-DATOS COMPONENT] LOAD', props<{modifiedData:UserModel}>())
export const SuccessModificarDatosCuenta = createAction('[MODIFICAR-DATOS COMPONENT] SUCCESS', props<{successData:string}>())
export const FailedModificarDatosCuenta = createAction('[MODIFICAR-DATOS COMPONENT] FAILED',props<{failedData:HttpErrorResponse}>())

export const ResetModificarDatosCuenta = createAction('[MODIFICAR-DATOS COMPONENT] RESET')





export const ChargeDetailUser = createAction('[GET-DATOS COMPONENT] CHARGE DETAIL')
export const SuccessDetailUser = createAction('[GET-DATOS COMPONENT] SUCCESS DETAIL',props<{successData:UserModel}>())
export const FailedDetailUser = createAction('[GET-DATOS COMPONENT] FAILED DETAIL', props<{failedData:HttpErrorResponse}>())

export const LoadChangePassword = createAction('[CAMBIAR-CLAVE COMPONENT] LOAD CHANGE', props<{passwords:ChangePasswordInterface}>())
export const successChangePassword = createAction('[CAMBIAR-CLAVE COMPONENT] SUCCESS CHANGE PASSWORD' , props<{successData:string}>() )
export const FailedChangePassword = createAction('[CAMBIAR-CLAVE COMPONENT] FAILED CHANGE PASSWORD', props<{failedData:HttpErrorResponse}>())

