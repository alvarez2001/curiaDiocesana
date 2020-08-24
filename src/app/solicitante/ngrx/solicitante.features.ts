import { createFeatureSelector, createSelector } from "@ngrx/store";
import { keySolicitantesModule } from "./solicitante.actions";
import { BancosState, RegisterProjectState } from "../../administrador/proyectos/models/ngrxModelsProjects";
import * as modelsNgrx from "../models/SolicitantesNrgx.Models";
import { BasicDatas } from 'src/app/administrador/usuarios/models/usersInactive.models';

interface ModuleSolicitantes {
  todosLosBancos:BancosState,
  registrarEliminarBanco:RegisterProjectState,
  proyectosSolicitantesSolicitud:modelsNgrx.ProyectosSolicitantesModule,
  ConceptosSolicitantesState:modelsNgrx.ConceptosSolicitantesModulo,
  StateSolicitudRegistrar:BasicDatas
}

const featureSelector = createFeatureSelector<ModuleSolicitantes>(keySolicitantesModule);

export const Todoslosbancos = createSelector(featureSelector,(state)=>state.todosLosBancos);
export const TomarBancosEliminarRegistrar = createSelector(featureSelector, (state)=>state.registrarEliminarBanco);
export const TomarProyectosSolicitantesSolicitud = createSelector(featureSelector,(state)=>state.proyectosSolicitantesSolicitud)
export const TomarConceptosSolicitantesState = createSelector(featureSelector,(state)=>state.ConceptosSolicitantesState)
