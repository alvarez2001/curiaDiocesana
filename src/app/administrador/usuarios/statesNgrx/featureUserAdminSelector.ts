import { createFeatureSelector, createSelector } from '@ngrx/store';
import { keyStoreModule } from "./usuarios.actions";
import { InitialDataRegisterAdmin } from '../models/usersAdmin.models';
import { InitialStateUsersList, UserStatusModel } from '../models/usersInactive.models';

interface DataRegiter{
  DataRegisterAdmin?:InitialDataRegisterAdmin;
  ListUsersInactiveOrActive?:InitialStateUsersList;
  userStatus?:UserStatusModel
}

export const getDataRegisterAdminState = createFeatureSelector<DataRegiter>(keyStoreModule);
export const getDataRegisterState = createSelector(getDataRegisterAdminState,(state) => state.DataRegisterAdmin)


export const getUsersListState = createFeatureSelector<DataRegiter>(keyStoreModule);
export const getUsersList = createSelector(getUsersListState, (state) => state.ListUsersInactiveOrActive)


export const getUserStatusState = createFeatureSelector<DataRegiter>(keyStoreModule);
export const getUserStatus = createSelector(getUserStatusState,(state) => state.userStatus)
