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
  modificarUsuarioProyecto:models.RegisterProjectState
}

const featureSelectorProjects = createFeatureSelector<StoreModuleProject>(KeyProjectsFeature)


export const registrarProyectoState = createSelector(featureSelectorProjects, (state) => state.registrarProyecto)
export const getListUsersSolicitante = createSelector(featureSelectorProjects, (state) => state.usersSolicitantes)
export const ProjectsAllPaginatesOrNot = createSelector(featureSelectorProjects,(state)=>state.projectsAll)
export const TomaProyectoEspecificoState = createSelector(featureSelectorProjects,(state)=>state.proyectoEspecifico)
export const TomarModificarInfoProyecto = createSelector(featureSelectorProjects, (state)=>state.modificarInfoProyecto)
export const TomarModificarCodigoProyecto = createSelector(featureSelectorProjects,(state)=>state.modificarCodigoProyecto)
export const TomarModificarUsuarioProyecto = createSelector(featureSelectorProjects,(state)=>state.modificarUsuarioProyecto)
