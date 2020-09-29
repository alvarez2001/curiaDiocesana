import { ProjectModelComplete, tipoMoneda } from "../../proyectos/models/project.models";
import { ProductosAgregados } from "../../../solicitante/models/solicitantes.models";
export interface SolicitudModel {
  id:          number;
  responsable: string;
  status:      string;
  concepto:    string;
  total:       string;
  tasa_cambio: null | number;
  proyecto_id: number;
  created_at:  Date;
  updated_at:  Date;
  proyecto:    ProjectModelComplete;
  productos:   ProductosAgregados[];
  banco:       BancoSolicitud;
}


export interface BancoSolicitud {
  id:             number;
  titular:        string;
  identificacion: string;
  banco:          string;
  numero:         string;
  solicitud_id:   number;
  created_at:     null;
  updated_at:     null;
}


export interface EjecucionSolicitud {
  referenciaBancaria?: string;
  comision:string;
  referencia:string | string;
  banco:string;
  fecha:string;
  proyecto_ingreso?:string;
  archivo?:File;
}

export interface ModeloPersonalizada{
  busqueda:string,
  valor:string,
  mes:string,
  ano:string
}






export interface EgresosIngresosModel {
  id:           number;
  fullname:     string;
  operacion_id: number;
  proyecto_id:  number;
  solicitud_id: number | null;
  created_at:   Date;
  updated_at:   Date;
  operacion:    Operacion;
  solicitud:    Solicitud | null;
  proyecto:     Proyecto;
}

export interface Operacion {
  id:              number;
  tasa:            number;
  total_euro:      number;
  comision:        number;
  total_solicitud: number | null;
  concepto:        string;
  referencia:      string;
  banco:           string;
  fecha_bancaria:  Date;
  status:          number;
  created_at:      Date;
  updated_at:      null;
}

export interface Proyecto {
  id:         number;
  codigo:     string;
  nombre:     string;
  aprobado:   number;
  disponible: number;
  comision:   number;
  status:     number;
  moneda:     tipoMoneda;
  alias:      string | null;
  usuario_id: number | null;
  created_at: Date | null;
  updated_at: Date | null;
}



export interface Solicitud {
  id:          number;
  responsable: string;
  status:      number;
  concepto:    string;
  total:       number;
  tasa_cambio: number | null;
  proyecto_id: number;
  created_at:  Date;
  updated_at:  Date;
}
