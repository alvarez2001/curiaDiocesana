import { PaginateMolde } from '../../usuarios/models/usersInactive.models';

export type tipoMoneda  = 'Dolar' | 'Euro';
export const tipoMonedaConst =  ['Dolar','Euro'];

export const statusProject:{value:number,status:string}[] = [
  {value:0, status:'Inactivo'},
  {value:1, status:'Activo'},
  {value:2, status:'En espera'},
];

export interface ProjectModel {
  codigo:string;
  nombre:string;
  aprobado:number;
  comision:number;
  status:number;
  moneda:tipoMoneda;
  alias?:string | null ;
  usuario?:number | null;
  usuario_id?:number | null;
}


export interface ProjectModelComplete extends ProjectModel{
  id:         number;
  disponible: string;
  created_at: Date;
  updated_at: Date;
}

export interface PaginateProjectsComplete extends PaginateMolde{
  data:ProjectModelComplete[];
}


export interface ModelModificarDatosInformacion {
  nombre:string;
  status:number;
  moneda:tipoMoneda;
  alias?:string;

}
