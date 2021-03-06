import { props, createAction } from "@ngrx/store";
import { UsersAdminInterface } from "../models/usersAdmin.models";
import { HttpErrorResponse } from '@angular/common/http';
import { InitialStateUsersList, PaginateUsers, UserModel, permisosModel, PermisoAsignarRevocar } from '../models/usersInactive.models';


export enum ActionsUsuarios {
  LOAD_REGISTER_ADMIN = '[crear-usuario Component] Load register',
  SUCCESS_REGISTER_ADMIN = '[crear-usuario Component] Success register',
  FAILED_REGISTER_ADMIN = '[crear-usuario Component] Failed register',
  FINISH_REGISTER_ADMIN = '[crear-usuario Component] Finish register',

  /* ------------------------ USERS INACTIVE ------------------------ */

  LOAD_USERS_INACTIVE = '[LIST-USERS-INACTIVE COMPONENT] LOAD USERS-INACTIVE',
  LOAD_USERS_ACTIVE = '[LIST-USERS-INACTIVE COMPONENT] LOAD USERS-ACTIVE',
  LOAD_PAGINATE = '[LIST-USERS-PAGINATE COMPONENT] LOAD USERS-LIST',

  SUCCESS_USERS_INACTIVE = '[LIST-USERS-LIST COMPONENT] SUCCESS USERS-LIST',
  FAILED_USERS_INACTIVE = '[LIST-USERS-LIST COMPONENT] FAILED USERS-LIST',



  RESET_ACTIVATED_DESACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] RESET USER STATE',

  LOAD_ACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] LOAD ACTIVATED-USER',
  SUCCESS_ACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] SUCCESS ACTIVATED-USER',
  FAILED_ACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] FAILED ACTIVATED-USER',

  LOAD_INACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] LOAD INACTIVATED-USER',
  SUCCESS_INACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] SUCCESS INACTIVATED-USER',
  FAILED_INACTIVATED_USER = '[INFO-USUARIOS-LISTADOS COMPONENT] FAILED INACTIVATED-USER'

}


export const keyStoreModule = 'USUARIO_ADMIN';



export const loadRegisterAdmin = createAction(ActionsUsuarios.LOAD_REGISTER_ADMIN, props<{dataAdmin:UsersAdminInterface}>());
export const successRegisterAdmin = createAction(ActionsUsuarios.SUCCESS_REGISTER_ADMIN, props<{successData:string}>())
export const failedRegisterAdmin = createAction(ActionsUsuarios.FAILED_REGISTER_ADMIN, props<{failedData:HttpErrorResponse}>())
export const finishRegisterAdmin = createAction(ActionsUsuarios.FINISH_REGISTER_ADMIN)



export const loadUsersInactive = createAction(ActionsUsuarios.LOAD_USERS_INACTIVE);
export const LoadusersActive = createAction(ActionsUsuarios.LOAD_USERS_ACTIVE);
export const LoadPaginateUsersList = createAction(ActionsUsuarios.LOAD_PAGINATE, props<{page:string}>());

export const successUsersInactive = createAction(ActionsUsuarios.SUCCESS_USERS_INACTIVE, props<{PaginateUsersList:PaginateUsers}>());
export const failedUsersInactive = createAction(ActionsUsuarios.FAILED_USERS_INACTIVE, props<{failedData:HttpErrorResponse}>());

export const resetUsersActivatedOrDesactivated = createAction(ActionsUsuarios.RESET_ACTIVATED_DESACTIVATED_USER)
export const loadActivatedUser = createAction(ActionsUsuarios.LOAD_ACTIVATED_USER, props<{id:number}>());
export const successActivatedUser = createAction(ActionsUsuarios.SUCCESS_ACTIVATED_USER, props<{successData:string}>())
export const failedActivatedUser = createAction(ActionsUsuarios.FAILED_ACTIVATED_USER, props<{failedData:HttpErrorResponse}>())

export const loadInactivatedUser = createAction(ActionsUsuarios.LOAD_INACTIVATED_USER,props<{id:number}>())
export const successInactivatedUser = createAction(ActionsUsuarios.SUCCESS_INACTIVATED_USER, props<{successData:string}>())
export const failedInactivatedUser = createAction(ActionsUsuarios.FAILED_INACTIVATED_USER, props<{failedData:HttpErrorResponse}>());



export const loadAllAdministrador = createAction('[ADMINISTRADOR COMPONENT] LOAD ADMINISTRADOR')
export const SuccessAllAdministrador = createAction('[ADMINISTRADOR COMPONENT] SUCCESS ADMINISTRADOR', props<{admins:UserModel[]}>())
export const FailedLoadAdministrador = createAction('[ADMINISTRADOR COMPONENT] FAILED ADMINISTRADOR',props<{failedData}>())

export const loadAllPermisos = createAction('[PERMISOS COMPONENT] LOAD ALL PERMISOS')
export const SuccessAllPermisos = createAction('[PERMISOS COMPONENT] SUCCESS ALL PERMISOS', props<{permisos:permisosModel[]}>())
export const FailedAllPermisos = createAction('[PERMISOS COMPONENT] FAILED ALL PERMISOS',props<{failedData:HttpErrorResponse}>())

export const loadPermisosUser = createAction('[PERMISOS COMPONENT] LOAD PERMISOS USER', props<{id:number}>())
export const SuccessPermisosUser = createAction('[PERMISOS COMPONENT] SUCCESS PERMISOS USER',props<{permisosUser:permisosModel[]}>())
export const FailedPermisosUser = createAction('[PERMISOS COMPONENT] FAILED PERMISOS USER',props<{failedData:HttpErrorResponse}>())


export const loadAsignarPermiso = createAction('[PERMISOS COMPONENT] ASIGNAR PERMISOS USER', props<{data:PermisoAsignarRevocar}>())
export const successAsignarPermiso = createAction('[PERMISOS COMPONENT] SUCCESS ASIGNAR PERMISOS USER',props<{success:string, id:number}>())
export const FailedAsignarPermiso = createAction('[PERMISOS COMPONENT] FAILED ASIGNAR PERMISOS USER',props<{failed:HttpErrorResponse}>())

export const loadRevocarPermiso = createAction('[PERMISOS COMPONENT] REVOCAR PERMISOS USER', props<{data:PermisoAsignarRevocar}>())
export const successRevocarPermiso = createAction('[PERMISOS COMPONENT] SUCCESS REVOCAR PERMISOS USER',props<{success:string, id:number}>())
export const FailedRevocarPermiso = createAction('[PERMISOS COMPONENT] FAILED REVOCAR PERMISOS USER',props<{failed:HttpErrorResponse}>())

