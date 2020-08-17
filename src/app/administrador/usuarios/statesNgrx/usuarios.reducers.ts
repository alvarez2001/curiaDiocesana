import { on, createReducer } from "@ngrx/store";
import * as actions from "./usuarios.actions";
import { InitialDataRegisterAdmin } from "../models/usersAdmin.models";
import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store/src/models";
import { InitialStateUsersList, UserStatusModel, AdminsStateModel, permisosStateModel, PermisosRevocarAsignarState } from '../models/usersInactive.models';

const initialState: InitialDataRegisterAdmin = {
  dataAdmin:{},
  loading:false,
  successData:'',
  failedData:new HttpErrorResponse({})
}


const _registerAdmin = createReducer(
  initialState,
  on(actions.loadRegisterAdmin, (state, { dataAdmin }) => {
    return {
      ...state,
      dataAdmin:dataAdmin,
      failedData:new HttpErrorResponse({}),
      successData:'',
      loading:true
    }
  }),
  on(actions.successRegisterAdmin, (state, { successData }) => {
    return {
      ...state,
      successData:successData,
    }
  }),
  on(actions.failedRegisterAdmin, (state, { failedData }) => {
    return {
      ...state,
      failedData:failedData,
    }
  }),
  on(actions.finishRegisterAdmin, state => {
    return {
      ...state,
      loading:false
    }
  })
  )

  export function registerAdmin(state:InitialDataRegisterAdmin,action:Action){
    return _registerAdmin(state,action)
  }




const initialStateUsers:InitialStateUsersList = {
  success:3,

  loading:false,
  ListUsers:  null,
  CurrentPage: null,
  LastPage: null,
  Path:null,
  failedData:null,
}
/*
success =>
            1 => perfecto,
            2 => error,
            3 => en espera
*/

const _listUsers = createReducer(
  initialStateUsers,
  on(actions.loadUsersInactive, (state)=> {
    return {...state, loading:true, success:3,ListUsers:null}
  }),
  on(actions.LoadusersActive, (state)=> {
    return {...state, loading:true, success:3,ListUsers:null}
  }),
  on(actions.LoadPaginateUsersList, (state, {page}) => {
    return {
      ...state,
      loading:true,
      success:3,
      ListUsers:null
    }
  }),
  on(actions.successUsersInactive, (state, { PaginateUsersList }) => {
    return {
      ...state,
      success:1,
      loading:false,

      ListUsers:PaginateUsersList.data,
      CurrentPage:PaginateUsersList.current_page,
      LastPage:PaginateUsersList.last_page,
      Path:PaginateUsersList.path
    }
  }),
  on(actions.failedUsersInactive, (state, { failedData }) => {
    return {
      ...state,
      success:2,
      loading:false,
      failedData:failedData
    }
  }),
)

export function listUsers(state:InitialStateUsersList,action:Action){
  return _listUsers(state,action)
}


/*
success =>
            1 => perfecto,
            2 => error,
            3 => en espera
*/

const initialStateStatusUser:UserStatusModel = {
  success:3,
  loading:false,
  failedData:null,
  successData:null
}

const _userStatus = createReducer(
  initialStateStatusUser,

  on(actions.resetUsersActivatedOrDesactivated, (state) => {
    return {...state, success:3,failedData:null,successData:null, loading:false}
  }),

  on(actions.loadActivatedUser, (state, { id })=>{
    return {...state,loading:true, success:3,failedData:null, successData:null}
  }),
  on(actions.successActivatedUser, (state, { successData } ) => {
    return {...state,loading:false,success:1, successData:successData}
  }),
  on(actions.failedActivatedUser, (state, { failedData }) => {
    return {...state, loading:false, success:2, failedData:failedData}
  }),

  /* INACTIVATED */

  on(actions.loadInactivatedUser, (state, { id })=>{
    return {...state,loading:true, success:3,failedData:null, successData:null}
  }),
  on(actions.successInactivatedUser, (state, { successData } ) => {
    return {...state,loading:false,success:1, successData:successData}
  }),
  on(actions.failedInactivatedUser, (state, { failedData }) => {
    return {...state, loading:false, success:2, failedData:failedData}
  })


)

export function userStatus(state:UserStatusModel,action:Action){
  return _userStatus(state,action);
}






/* PERMISOS Y ADMINISTRADOR */

const initialStateLoadAllAdmin:AdminsStateModel = {
  success:3,
  loading:false,
  dataAdmin:null
}

const _listAdmins = createReducer(
  initialStateLoadAllAdmin,
  on(actions.loadAllAdministrador, (state) => {
    return {
      ...state,
      loading:true,
      success:3,
      dataAdmin:null
    }
  }),
  on(actions.SuccessAllAdministrador, (state, { admins }) => {
    return {
      ...state,
      loading:false,
      success:1,
      dataAdmin:admins
    }
  }),
  on(actions.FailedLoadAdministrador, (state, { failedData }) => {
    return {
      ...state,
      loading:false,
      success:2
    }
  })
)

export function listAdmins(state:AdminsStateModel,action:Action){
  return _listAdmins(state,action)
}


const InitialStateLoadPermisos:permisosStateModel = {
  loading:false,
  success:3,
  permisos:null
}

const _StateAllPermisos = createReducer(
  InitialStateLoadPermisos,
  on(actions.loadAllPermisos, (state) => {
    return {
      ...state,
      loading:true,
      success:3,
      permisos:null
    }
  }),
  on(actions.SuccessAllPermisos, (state, {permisos} )  => {
    return {
      ...state,
      permisos:permisos,
      loading:false,
      success:1
    }
  }),
  on(actions.FailedAllPermisos, (state, {failedData})=> {
    return {
      ...state,
      loading:false,
      success:2,
    }
  })
)

export function StateAllPermisos(state:permisosStateModel,action:Action){
  return _StateAllPermisos(state,action)
}


const _StateAllPermisosUser = createReducer(
  InitialStateLoadPermisos,
  on(actions.loadPermisosUser, (state, {id}) => {
    return {
      ...state,
      loading:true,
      success:3,
      permisos:null
    }
  }),
  on(actions.SuccessPermisosUser, (state, {permisosUser}) => {
    return {
      ...state,
      loading:false,
      success:1,
      permisos:permisosUser
    }
  }),
  on(actions.FailedPermisosUser, (state,{failedData}) => {
    return {
      ...state,
      loading:false,
      success:2
    }
  })
)

export function StateAllPermisosUser(state:permisosStateModel,action:Action){
  return _StateAllPermisosUser(state,action)
}




const initialStatePermisosAsignarRevocar:PermisosRevocarAsignarState = {
  success:3,
  loading:false,
  data:null
}

const _permisosAsignarRevocarState = createReducer(
  initialStatePermisosAsignarRevocar,
  on(actions.loadAsignarPermiso , (state, {data})=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:null
    }
  }),
  on(actions.successAsignarPermiso, (state, {success, id}  ) => {
    return {
      ...state,
      loading:false,
      success:1,
      data:success
    }
  }),
  on(actions.FailedAsignarPermiso, (state, {failed} ) => {
    return {
      ...state,
      loading:false,
      success:2
    }
  }),

  /* revocar */

  on(actions.loadRevocarPermiso , (state, {data})=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:null
    }
  }),
  on(actions.successRevocarPermiso, (state, {success, id}  ) => {
    return {
      ...state,
      loading:false,
      success:1,
      data:success
    }
  }),
  on(actions.FailedRevocarPermiso, (state, {failed} ) => {
    return {
      ...state,
      loading:false,
      success:2
    }
  })


)

export function permisosAsignarRevocarState(state:PermisosRevocarAsignarState,action:Action){
  return _permisosAsignarRevocarState(state,action)
}
