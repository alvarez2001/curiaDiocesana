import { createReducer, on, Action } from "@ngrx/store";
import { SolicitudStateModel, AsignacionTasaState } from "../models/models-ngrx";
import * as actions from './solicituds.actions';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';


const initialStateSolicitud:SolicitudStateModel = {
  loading:false,
  success:3,
  data:[]
}

const _StateSolicitudsRealizadas = createReducer(
  initialStateSolicitud,
  on(actions.CargarSolicitudesPorAsignarTasa, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CargarSolicitudesPorRevision, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CargarSolicitudesRevisadas, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CargarSolicitudesPorAutorizacion,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CargarSolicitudesPorEjecutado,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CargarSolicitudesRechazadas,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CorrectoSolicitudesLista,(state, {data})=>{
    return {
      ...state,
      loading:false,
      success:1,
      data:data
    }
  }),
  on(actions.FallidoSolicitudesLista, (state, {error})=>{
    return {
      ...state,
      loading:false,
      success:2,
      data:[]
    }
  })
)

export function StateSolicitudsRealizadas(state:SolicitudStateModel,action:Action){
  return _StateSolicitudsRealizadas(state,action)
}


const initialStateProcesoSolicitud:BasicDatas = {
  loading:false,
  success:3
}

const _StateProcesoSolicitud = createReducer(
  initialStateProcesoSolicitud,

  on(actions.CargarRevisarSolicitud, (state)=>{
    return {
      ...state,
      loading:true,
      success:3
    }
  }),
  on(actions.CargarAutorizarSolicitud, (state)=>{
    return {
      ...state,
      loading:true,
      success:3
    }
  }),
  on(actions.CargarRechazarSolicitud, (state)=>{
    return {
      ...state,
      loading:true,
      success:3
    }
  }),
  on(actions.CorrectoProcesoSolicitud,(state)=>{
    return {
      ...state,
      loading:false,
      success:1
    }
  }),
  on(actions.FallidoProcesoSolicitud,(state)=>{
    return {
      ...state,
      loading:false,
      success:2
    }
  }),
  on(actions.ReiniciarProcesoSolicitud, (state)=>{
    return {
      ...state,
      loading:false,
      success:3
    }
  })
)

export function StateProcesoSolicitud(state:BasicDatas, action:Action){
  return _StateProcesoSolicitud(state,action)
}


const initialStateAsignarTasa:AsignacionTasaState = {
  loading:false,
  success:3,
  clave:false,
  introducirClave:false,
  tasa:null,
  solicitud:null,
  claveCorrecta:false,
}

const _StateAsignarTasa = createReducer(
  initialStateAsignarTasa,
  on(actions.CargarAsignarTasa, (state, {tasa, idSolicitud})=>{
    return {
      ...state,
      loading:true,
      success:3,
      clave:false,
      tasa:tasa,
      solicitud:idSolicitud,
      introducirClave:false,
      claveCorrecta:false
    }
  }),
  on(actions.CorrectoAsignarTasa, (state)=>{
    return {
      ...state,
      loading:false,
      success:1,
      clave:false,
      introducirClave:false
    }
  }),
  on(actions.FallidoAsignarTasa,(state, {error})=>{
    let value:boolean = false
    if(error.status === 422){
      value = true
    }
    return {
      ...state,
      loading:false,
      success:2,
      clave:value,
      introducirClave:false
    }
  }),
  on(actions.IntroducirClaveAsignarTasa, (state)=>{
    return {
      ...state,
      introducirClave:true
    }
  }),
  on(actions.IntroducirCorrectaClaveAsignarTasa, (state)=>{
    return {
      ...state,
      claveCorrecta:true
    }
  }),
  on(actions.ReiniciarAsignarTasa, (state)=>{
    return {
      ...state,
      loading:false,
      success:3,
      clave:false,
      tasa:null,
      solicitud:null,
      introducirClave:false,
      claveCorrecta:false
    }
  })
)

export function StateAsignarTasa(state:AsignacionTasaState,action:Action){
  return _StateAsignarTasa(state,action)
}


const InitialStateGenerarCodigo:BasicDatas = {
  loading:false,
  success:3
}

const _StateGenerarCodigo = createReducer(
  InitialStateGenerarCodigo,
  on(actions.CargarGenerarCodigoAumentoTasa, (state)=>{
    return {
      ...state,
      loading:true,
      success:3
    }
  }),
  on(actions.CorrectoGenerarCodigoAumentoTasa, (state)=>{
    return {
      ...state,
      loading:false,
      success:1
    }
  }),
  on(actions.FallidoGenerarCodigoAumentoTasa, (state)=>{
    return {
      ...state,
      loading:false,
      success:2
    }
  })
)

export function StateGenerarCodigo(state:BasicDatas, action:Action){
  return _StateGenerarCodigo(state,action)
}
