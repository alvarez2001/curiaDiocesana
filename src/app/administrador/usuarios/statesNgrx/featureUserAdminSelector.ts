import { createFeatureSelector, createSelector } from '@ngrx/store';
import { keyStoreModule } from "./usuarios.actions";
import { InitialDataRegisterAdmin } from '../models/usersAdmin.models';
import { InitialStateUsersList, UserStatusModel, AdminsStateModel, permisosStateModel, PermisosRevocarAsignarState } from '../models/usersInactive.models';

interface DataRegiter{
  DataRegisterAdmin?:InitialDataRegisterAdmin;
  ListUsersInactiveOrActive?:InitialStateUsersList;
  userStatus?:UserStatusModel,
  ListAdmins?:AdminsStateModel,
  ListPermisos?:permisosStateModel,
  PermisosUser?:permisosStateModel,
  AddOrTrashPermiso?:PermisosRevocarAsignarState
}

export const featureSelector = createFeatureSelector<DataRegiter>(keyStoreModule);


export const getDataRegisterState = createSelector(featureSelector,(state) => state.DataRegisterAdmin)
export const getUsersList = createSelector(featureSelector, (state) => state.ListUsersInactiveOrActive)
export const getUserStatus = createSelector(featureSelector,(state) => state.userStatus)
export const getListAdmins = createSelector(featureSelector, (state) => state.ListAdmins)
export const getListPermisos = createSelector(featureSelector,(state) => state.ListPermisos)
export const getListPermisosUser = createSelector(featureSelector,(state) => state.PermisosUser)
export const getAddOrTrashPermisoUser = createSelector(featureSelector, (state)=> state.AddOrTrashPermiso)
