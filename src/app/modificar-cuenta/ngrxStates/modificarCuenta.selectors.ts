import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateModificarData, StateGetUserActive, StateInitialPasswordChange } from "../models/stateModificarData.interface";
import { keyStoreModuleModificarCuenta } from "./modificarCuenta.actions";

interface DataRegiter{
  modifiedData?:StateModificarData,
  detailUserActive?:StateGetUserActive,
  passwordChange?:StateInitialPasswordChange
}

 const key = createFeatureSelector<DataRegiter>(keyStoreModuleModificarCuenta);
export const getModifiedState = createSelector(key,(state) => state.modifiedData);
export const getDetailState = createSelector(key, (state ) => state.detailUserActive);
export const getPasswordChangeState = createSelector(key,(state) => state.passwordChange)
