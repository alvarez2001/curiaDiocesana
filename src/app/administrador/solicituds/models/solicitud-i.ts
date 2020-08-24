import { ProjectModelComplete } from "../../proyectos/models/project.models";
import { ProductosAgregados } from "../../../solicitante/models/solicitantes.models";
export interface SolicitudModel {
  id:          number;
  responsable: string;
  status:      string;
  concepto:    string;
  total:       string;
  tasa_cambio: null;
  proyecto_id: number;
  created_at:  Date;
  updated_at:  Date;
  proyecto:    ProjectModelComplete;
  productos:   ProductosAgregados[];
  banco:       BancoSolicitud[];
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
