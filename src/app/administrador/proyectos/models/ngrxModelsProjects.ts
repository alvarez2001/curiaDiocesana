import { BasicDatas } from "../../usuarios/models/usersInactive.models";
import { PaginateProjectsComplete, ProjectModelComplete } from './project.models';
export interface RegisterProjectState extends BasicDatas{
  responseSv:string | null;
}

export interface PaginateProjectsState extends BasicDatas{
  dataProjects:PaginateProjectsComplete | null;
}

export interface  ProyectoEspecificoState extends BasicDatas{
  Proyecto:ProjectModelComplete | null
}

