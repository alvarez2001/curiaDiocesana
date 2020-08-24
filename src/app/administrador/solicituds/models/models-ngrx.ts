import { BasicDatas } from "../../usuarios/models/usersInactive.models";
import { SolicitudModel } from "./solicitud-i";

export interface SolicitudStateModel extends BasicDatas {
  data:SolicitudModel[]
}


export interface AsignacionTasaState extends BasicDatas{
  clave:boolean;
  tasa:DatosTasa | null;
  solicitud:number | null;
  introducirClave:boolean;
  claveCorrecta:boolean;
}

export interface DatosTasa {
  tasa:number;
  codigo?:string
}
