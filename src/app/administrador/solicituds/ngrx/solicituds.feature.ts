import { createSelector, createFeatureSelector } from "@ngrx/store";
import { KeySolicitudsAdmin } from "./solicituds.actions";
import * as modelsNgrx from '../models/models-ngrx';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';

interface storeModuleSolicituds{
  StateSolicitudsRealizadas?:modelsNgrx.SolicitudStateModel,
  StateProcesoSolicitud?:BasicDatas,
  StateAsignarTasa?:modelsNgrx.AsignacionTasaState,
  StateGenerarCodigo?:BasicDatas
}

const featureSelector = createFeatureSelector<storeModuleSolicituds>(KeySolicitudsAdmin)

export const StateSolicitudsRealizadas = createSelector(featureSelector, (state)=>state.StateSolicitudsRealizadas)
export const StateProcesoSolicitud = createSelector(featureSelector,(state)=>state.StateProcesoSolicitud)
export const StateAsignarTasa = createSelector(featureSelector,(state)=>state.StateAsignarTasa)
export const StateGenerarCodigo = createSelector(featureSelector,(state)=>state.StateGenerarCodigo)
