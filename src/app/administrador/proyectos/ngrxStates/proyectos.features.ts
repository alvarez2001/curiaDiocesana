import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KeyProjectsFeature } from './proyectos.actions';
import * as models from "../models/ngrxModelsProjects";
import { AdminsStateModel } from '../../usuarios/models/usersInactive.models';

interface StoreModuleProject{
  registrarProyecto:models.RegisterProjectState,
  usersSolicitantes:AdminsStateModel,
  projectsAll:models.PaginateProjectsState,
  proyectoEspecifico:models.ProyectoEspecificoState,
  modificarInfoProyecto:models.RegisterProjectState,
  modificarCodigoProyecto:models.RegisterProjectState,
  modificarUsuarioProyecto:models.RegisterProjectState,
  modificarAprobadoProyecto:models.RegisterProjectState,
  aumentarProyectoDesdeComision:models.RegisterProjectState,
  conceptoRegistrarEliminar:models.RegisterProjectState,
  conceptosTodos:models.ConceptosState,
  registrarEliminarBanco:models.RegisterProjectState,
  todosLosBancos:models.BancosState
}

const featureSelectorProjects = createFeatureSelector<StoreModuleProject>(KeyProjectsFeature)


export const registrarProyectoState = createSelector(featureSelectorProjects, (state) => state.registrarProyecto)
export const getListUsersSolicitante = createSelector(featureSelectorProjects, (state) => state.usersSolicitantes)
export const ProjectsAllPaginatesOrNot = createSelector(featureSelectorProjects,(state)=>state.projectsAll)
export const TomaProyectoEspecificoState = createSelector(featureSelectorProjects,(state)=>state.proyectoEspecifico)
export const TomarModificarInfoProyecto = createSelector(featureSelectorProjects, (state)=>state.modificarInfoProyecto)
export const TomarModificarCodigoProyecto = createSelector(featureSelectorProjects,(state)=>state.modificarCodigoProyecto)
export const TomarModificarUsuarioProyecto = createSelector(featureSelectorProjects,(state)=>state.modificarUsuarioProyecto)
export const TomarModificarAprobadoProyecto = createSelector(featureSelectorProjects, (state)=>state.modificarAprobadoProyecto)
export const TomarAumentarProyectoDesdeComision = createSelector(featureSelectorProjects, (state)=>state.aumentarProyectoDesdeComision)
export const TomarConceptoRegistrarEliminar = createSelector(featureSelectorProjects,(state)=>state.conceptoRegistrarEliminar)
export const TomarConceptosTodos = createSelector(featureSelectorProjects, (state)=>state.conceptosTodos)
export const TomarBancosEliminarRegistrar = createSelector(featureSelectorProjects, (state)=>state.registrarEliminarBanco)
export const Todoslosbancos = createSelector(featureSelectorProjects,(state)=>state.todosLosBancos)
