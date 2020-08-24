import { BasicDatas } from "../../administrador/usuarios/models/usersInactive.models";
import { SolicitudAgregar, proyectosUsuarioSolicitanteAddSolicitud } from "./solicitantes.models";
import { CrearNuevoConceptoInterface } from 'src/app/administrador/proyectos/models/project.models';
export interface ProyectosSolicitantesModule extends BasicDatas{
  data:proyectosUsuarioSolicitanteAddSolicitud[];
}
export interface ConceptosSolicitantesModulo extends BasicDatas{
  data:CrearNuevoConceptoInterface[];
}
