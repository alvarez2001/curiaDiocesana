import { on, createReducer, Action } from "@ngrx/store";
import { StateModificarData, StateGetUserActive, StateInitialPasswordChange } from "../models/stateModificarData.interface";
import * as actions from "./modificarCuenta.actions";



const initialStateReducerModificarCuenta:StateModificarData = {
  success:3,
  loading:false,
  failedData:null,
  modifiedData:null,
}

const _ModificarCuenta = createReducer(
  initialStateReducerModificarCuenta,
  on(actions.CargarModificarDatosCuenta, (state,{modifiedData}) => {
    return {
      ...state,
      success:3,
      loading:true,
      modifiedData:modifiedData
    }
  }),
  on(actions.SuccessModificarDatosCuenta, (state,{successData}) => {
    return {
      ...state,
      loading:false,
      success:1
    }
  }),
  on(actions.FailedModificarDatosCuenta, (state, {failedData}) => {
    return {
      ...state,
      success:2,
      loading:false
    }
  }),
  on(actions.ResetModificarDatosCuenta,(state ) => {
    return {
      ...state,
      success:3,
      loading:false,
      modifiedData:null,
      failedData:null
    }
  })
)

export function ModificarCuenta(state:StateModificarData,action:Action){
  return _ModificarCuenta(state,action)
}


const initialStateGetDetail:StateGetUserActive = {
  success:3,
  loading:false,
  failedData:null,
  successData:null,
}



const _getDetailUserCuenta = createReducer(
  initialStateGetDetail,
  on(actions.ChargeDetailUser, (state) => {
    return {
      ...state,
      loading:true,
      failedData:null,
      success:3,
      successData:null
    }
  }),
  on(actions.SuccessDetailUser, (state, {successData}) => {
    return {
      ...state,
      loading:false,
      success:1,
      successData:successData
    }
  }),
  on(actions.FailedDetailUser, (state, { failedData }) => {
    return {
      ...state,
      loading:false,
      success:2,
      failedData:failedData
    }
  })
)


export function GetDetailUserCuenta(state:StateGetUserActive,action:Action){
  return _getDetailUserCuenta(state,action)
}


const initialStateChangePassword:StateInitialPasswordChange = {
  success:3,
  loading:false,
  failedData:null,
  passwords:null
}

const _ChangePasswordState = createReducer(
  initialStateChangePassword,
  on(actions.LoadChangePassword, (state, {passwords}) => {
    return {
      ...state,
      loading:true,
      failedData:null,
      passwords:passwords,
      success:3,
    }
  }),
  on(actions.successChangePassword, (state,  { successData }) => {
    return {
      ...state,
      loading:false,
      success:1
    }
  }),
  on(actions.FailedChangePassword, (state, { failedData }) => {
    return {
      ...state,
      loading:false,
      success:2,
      failedData:failedData
    }
  }),
)

export function ChangePasswordState(state:StateInitialPasswordChange,action:Action){
  return _ChangePasswordState(state,action)
}
