import { UsersAdminInterface } from "./usersAdmin.models";
import { HttpErrorResponse } from '@angular/common/http';


export interface UserModel extends UsersAdminInterface{
  status: number;
  tipo: number;
  updated_at: Date;
  id: number;
  created_at: Date;
}


export interface PaginateMolde {
  current_page?:   number;
  data?:           any[];
  first_page_url?: string;
  from?:           number;
  last_page?:      number;
  last_page_url?:  string;
  next_page_url?:  null;
  path?:           string;
  per_page?:       number;
  prev_page_url?:  null;
  to?:             number;
  total?:          number;
}

export interface PaginateUsers extends PaginateMolde{
  data: UserModel[];
}

export interface BasicDatas{
  loading:boolean;
  success:number;
}

export interface BasicDataReducers extends BasicDatas{
  failedData?:HttpErrorResponse | null;
}

export interface InitialStateUsersList extends BasicDataReducers{
  ListUsers: UserModel[] | null;
  CurrentPage:number | null;
  LastPage:number | null;
  Path:string | null;
}


export interface UserStatusModel extends BasicDataReducers{
  successData:string | null;
}

export interface AdminsStateModel extends BasicDatas {
  dataAdmin:UserModel[] | null;
}
export interface permisosStateModel extends BasicDatas{
  permisos: string[] |  permisosModel[] | null ;
}

export interface permisosModel {
  name:string
}

export interface PermisosRevocarAsignarState extends BasicDatas{
  data:string | null;
}


export interface PermisoAsignarRevocar {
  usuario:number;
  permiso:string;
}
