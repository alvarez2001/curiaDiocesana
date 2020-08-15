import { props, createAction } from "@ngrx/store";
import { UsersAdminInterface } from "../models/usersAdmin.models";
import { HttpErrorResponse } from '@angular/common/http';
import { InitialStateUsersList, PaginateUsers } from '../models/usersInactive.models';


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



