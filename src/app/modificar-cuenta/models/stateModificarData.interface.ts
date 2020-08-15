import { BasicDataReducers, UserModel } from "../../administrador/usuarios/models/usersInactive.models";

export interface StateModificarData extends BasicDataReducers {
  modifiedData:UserModel | null;
}


export interface StateGetUserActive extends BasicDataReducers {
  successData:UserModel | null;
}

export interface StateInitialPasswordChange extends BasicDataReducers{
  passwords:ChangePasswordInterface | null
}


export interface ChangePasswordInterface {
  password:string;
  password_confirmation:string;
}

