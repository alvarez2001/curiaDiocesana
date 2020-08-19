import { on, createReducer, Action } from "@ngrx/store";
import * as modelsNgrx from "../models/ngrxModelsProjects";
import * as actions from './proyectos.actions';
import { UserModel, AdminsStateModel } from '../../usuarios/models/usersInactive.models';
import { PaginateProjectsComplete } from '../models/project.models';


const initialProject:modelsNgrx.RegisterProjectState = {
  loading:false,
  success:3,
  responseSv:null
}

const _ProjectRegister = createReducer(
  initialProject,
  on(actions.Load_Register_Project,(state, { dataProject })=>{
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Success_Register_Project, (state, { successData })=>{
    return {
      ...state,
      loading:false,
      success:1,
      responseSv:successData
    }
  }),
  on(actions.Failed_Register_Project, (state, { FailedData }) => {
    return {
      ...state,
      loading:false,
      success:2,
      responseSv:'Ha ocurrido un error'
    }
  }),
  on(actions.Complete_Register_Project, (state)=>{
    return {
      ...state,
      loading:false,
      success:3,
      responseSv:null
    }
  })
)

export function ProjectRegister(state:modelsNgrx.RegisterProjectState,action:Action){
  return _ProjectRegister(state,action)
}

const initialUsersSolicitante:AdminsStateModel = {
  loading:false,
  success:3,
  dataAdmin:[]
}

const _UsersSolicitantes = createReducer(
  initialUsersSolicitante,
  on(actions.Load_Users_Solicitantes, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      dataAdmin:[]
    }
  }),
  on(actions.Success_Users_Solicitantes, (state, {users}) => {
    return {
      ...state,
      loading:false,
      success:1,
      dataAdmin:users
    }
  }),
  on(actions.Failed_Users_Solicitantes, (state, {failedData})=>{
    return {
      ...state,
      loading:false,
      success:2
    }
  })
)


export function UsersSolicitantes(state:AdminsStateModel, action:Action){
  return _UsersSolicitantes(state,action)
}


const initialStateProjectsPaginate:modelsNgrx.PaginateProjectsState = {
  loading:false,
  success:3,
  dataProjects:null
}

const _ProjectsPaginateOrProjectsAll = createReducer(
  initialStateProjectsPaginate,
  on(actions.Load_Projects_AllPaginate, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      dataProjects:null
    }
  }),
  on(actions.LoadPaginate_Projects_AllPaginate, (state, {paginate})=>{
    return {
      ...state,
      loading:true,
      success:3,
      dataProjects:null
    }
  }),
  on(actions.Load_Projects_All, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      dataProjects:null
    }
  }),
  on(actions.Success_Projects_AllPaginate, (state, {projects})=>{
    return {
      ...state,
      loading:false,
      success:1,
      dataProjects:projects
    }
  }),
  on(actions.Failed_Projects_AllPaginate,(state, {FailedData})=>{
    return {
      ...state,
      success:2,
      loading:false,
      dataProjects:null
    }
  })
)
export function ProjectsPaginateOrProjectsAll(state:modelsNgrx.PaginateProjectsState ,action:Action){
  return _ProjectsPaginateOrProjectsAll(state,action)
}


const inicialProyectoEspecifico:modelsNgrx.ProyectoEspecificoState ={
  loading:false,
  success:3,
  Proyecto:null
}

const _ProyectoEspecifico = createReducer(
  inicialProyectoEspecifico,
  on(actions.Cargar_Proyecto_Especifico, (state, {id, modal})=>{
    return {
      ...state,
      loading:true,
      success:3,
      Proyecto:null
    }
  }),

  on(actions.Correcto_Proyecto_Especifico, (state, {proyecto, modal})=>{
    return {
      ...state,
      loading:false,
      success:1,
      Proyecto:proyecto
    }
  }),

  on(actions.Fallo_Proyecto_Especifico, (state, {fallida})=>{
    return {
      ...state,
      loading:false,
      success:2
    }
  })
)

export function ProyectoEspecifico(state:modelsNgrx.ProyectoEspecificoState,action:Action){
  return _ProyectoEspecifico(state,action)
}


const initialStateModificarProyecto:modelsNgrx.RegisterProjectState = {
  success:3,
  loading:false,
  responseSv:null
}

const _ProyectoModificarInformacion = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Modificar_Informacion_Proyecto, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Correcto_Modificar_Informacion_Proyecto, (state, {successData})=>{
    return {
      ...state,
      loading:false,
      success:1,
      responseSv:successData
    }
  }),
  on(actions.Fallido_Modificar_Informacion_Proyecto,(state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      responseSv:'Ha ocurrido un error'
    }
  }),
  on(actions.Reiniciar_Modificar_Informacion_Proyecto, (state)=>{
    return {
      ...state,
      loading:false,
      success:3,
      responseSv:null
    }
  })
)
export function ProyectoModificarInformacion(state:modelsNgrx.RegisterProjectState, action:Action){
  return _ProyectoModificarInformacion(state,action)
}
