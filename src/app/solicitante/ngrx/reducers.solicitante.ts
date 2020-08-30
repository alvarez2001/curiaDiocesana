import { createReducer, on, Action } from "@ngrx/store";
import { ProyectosSolicitantesModule, ConceptosSolicitantesModulo, SolicitudesProyecto } from "../models/SolicitantesNrgx.Models";
import * as actions from "./solicitante.actions";
import { BasicDatas } from 'src/app/administrador/usuarios/models/usersInactive.models';

const initialStateProyectosSolicitantes:ProyectosSolicitantesModule = {
  loading:false,
  success:3,
  data:[]
}

const _ProyectosSolicitantesSolicitud = createReducer(
  initialStateProyectosSolicitantes,
  on(actions.Cargar_Proyectos_Solicitante , (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.Correcto_Proyectos_Solicitante, (state ,{proyectos})=>{
    return {
      ...state,
      loading:false,
      success:1,
      data:proyectos
    }
  }),
  on(actions.Fallido_Proyectos_Solicitantes, (state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      data:[]
    }
  })
)

export function ProyectosSolicitantesSolicitud(state:ProyectosSolicitantesModule,action:Action){
  return _ProyectosSolicitantesSolicitud(state,action)
}


const initialStateConceptos:ConceptosSolicitantesModulo = {
  loading:false,
  success:3,
  data:[]
}

const _ConceptosSolicitantesState = createReducer(
  initialStateConceptos,
  on(actions.CargarConceptosSolicitantes,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CorrectoConceptosSolicitantes,(state, {solicitantes})=>{
    return {
      ...state,
      loading:false,
      success:1,
      data:solicitantes
    }
  }),
  on(actions.FallidoConceptosSolicitantes, (state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      data:[]
    }
  }),
)
export function ConceptosSolicitantesState(state:ConceptosSolicitantesModulo,action:Action){
  return _ConceptosSolicitantesState(state,action)
}


const initialStateSolicitudRegistrar:BasicDatas = {
  loading:false,
  success:3
}

const _StateSolicitudRegistrar = createReducer(
  initialStateSolicitudRegistrar,
  on(actions.CargarGuardarSolicitud, (state)=>{
    return {
      ...state,
      loading:true,
      success:3
    }
  }),
  on(actions.CorrectoGuardarSolicitud, (state)=>{
    return {
      ...state,
      loading:false,
      success:1
    }
  }),
  on(actions.FallidoGuardarSolicitud, (state)=>{
    return {
      ...state,
      loading:false,
      success:2
    }
  }),
)

export function StateSolicitudRegistrar(state:BasicDatas,action:Action){
  return _StateSolicitudRegistrar(state,action)
}


const initialStateSolicitudes:SolicitudesProyecto = {
    loading:false,
    success:3,
    data:[]
}

const _StateSolicitudesProyecto = createReducer(
  initialStateSolicitudes,
  on(actions.CargarSolicitudesProyecto,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.CorrectoSolicitudesProyecto, (state,{data})=>{
    return {
      ...state,
      loading:false,
      success:1,
      data:data
    }
  }),
  on(actions.FallidoSolicitudesProyecto, (state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      data:[]
    }
  })
)

export function StateSolicitudesProyecto(state:SolicitudesProyecto,action:Action){
  return _StateSolicitudesProyecto(state,action)
}
