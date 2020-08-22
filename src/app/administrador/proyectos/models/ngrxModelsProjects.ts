import { BasicDatas } from "../../usuarios/models/usersInactive.models";
import { PaginateProjectsComplete, ProjectModelComplete, CrearNuevoConceptoInterface, bancosModel } from './project.models';
export interface RegisterProjectState extends BasicDatas{
  responseSv:string | null;
}

export interface PaginateProjectsState extends BasicDatas{
  dataProjects:PaginateProjectsComplete | null;
}

export interface  ProyectoEspecificoState extends BasicDatas{
  Proyecto:ProjectModelComplete | null
}

export interface ConceptosState extends BasicDatas{
  data:CrearNuevoConceptoInterface[]
}
export interface BancosState extends BasicDatas {
  data:bancosModel[]
}

