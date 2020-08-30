import { createSelector, createFeatureSelector } from "@ngrx/store";
import { KeySolicitudsAdmin } from "./solicituds.actions";
import * as modelsNgrx from '../models/models-ngrx';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';

interface storeModuleSolicituds{
  StateSolicitudsRealizadas?:modelsNgrx.SolicitudStateModel,
  StateProcesoSolicitud?:BasicDatas,
  StateAsignarTasa?:modelsNgrx.AsignacionTasaState,
  StateGenerarCodigo?:BasicDatas,
  StateReportesPorDia?:modelsNgrx.DatosReportesDiaState,
  StateAgregarOperacion?:BasicDatas,
  StateInfoEgresoDetallado?:BasicDatas,
  StateAnularEgreso?:BasicDatas
}

const featureSelector = createFeatureSelector<storeModuleSolicituds>(KeySolicitudsAdmin)

export const StateSolicitudsRealizadas = createSelector(featureSelector, (state)=>state.StateSolicitudsRealizadas)
export const StateProcesoSolicitud = createSelector(featureSelector,(state)=>state.StateProcesoSolicitud)
export const StateAsignarTasa = createSelector(featureSelector,(state)=>state.StateAsignarTasa)
export const StateGenerarCodigo = createSelector(featureSelector,(state)=>state.StateGenerarCodigo)
export const StateReportesPorDia = createSelector(featureSelector,(state)=>state.StateReportesPorDia)
export const StateAgregarOperacion = createSelector(featureSelector, (state)=>state.StateAgregarOperacion)
export const StateInfoEgresoDetallado = createSelector(featureSelector,(state)=>state.StateInfoEgresoDetallado)
export const StateAnularEgreso = createSelector(featureSelector,(state)=>state.StateAnularEgreso)
