import { props, createAction } from '@ngrx/store';
import * as models from '../models/project.models';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../usuarios/models/usersInactive.models';

export const KeyProjectsFeature = 'Proyectos Modulo';

export const Load_Register_Project = createAction(
  '[CREAR-PROYECTOS COMPONENT] LOAD REGISTER PROJECT',
  props<{ dataProject: models.ProjectModel }>()
);

export const Success_Register_Project = createAction(
  '[CREAR-PROYECTOS COMPONENT] SUCCESS REGISTER PROJECT',
  props<{ successData: string }>()
);

export const Failed_Register_Project = createAction(
  '[CREAR-PROYECTOS COMPONENT] FAILED REGISTER PROJECT',
  props<{ FailedData: HttpErrorResponse }>()
);

export const Complete_Register_Project = createAction(
  '[CREAR-PROYECTOS COMPONENT] COMPLETE REGISTER PROJECT'
);

export const Load_Users_Solicitantes = createAction(
  '[USUARIOS BUSQUEDA] LOAD USERS SOLICITANTES'
);
export const Success_Users_Solicitantes = createAction(
  '[USUARIOS BUSQUEDA] SUCCESS USERS SOLICITANTES',
  props<{ users: UserModel[] }>()
);
export const Failed_Users_Solicitantes = createAction(
  '[USUARIOS BUSQUEDA] FAILED USERS SOLICITANTES',
  props<{ failedData: HttpErrorResponse }>()
);

export const Load_Projects_AllPaginate = createAction(
  '[PROYECTOS MODULE] LOAD PROJECTS PAGINATE PAGINADOS'
);
export const Load_Projects_Search = createAction(
  '[PROYECTOS MODULE] LOAD PROJECTS PAGINATE PAGINADOS SEARCH',
  props<{valor:string}>()
)

export const Load_Projects_All = createAction(
  '[PROYECTOS MODULE] LOAD PROJECTS All SIN PAGINAR'
);
export const LoadPaginate_Projects_AllPaginate = createAction(
  '[PROYECTOS MODULE] LOAD PROJECTS ALL PAGINATE PAGINA',
  props<{ paginate: string }>()
);
export const Success_Projects_AllPaginate = createAction(
  '[PROYECTOS MODULE] SUCCESS PROJECTS PAGINATE O SIN PAGINAR',
  props<{ projects: models.PaginateProjectsComplete }>()
);
export const Failed_Projects_AllPaginate = createAction(
  '[PROYECTOS MODULE] FAILED PROJECTS PAGINATE O SIN PAGINAR',
  props<{ FailedData: HttpErrorResponse }>()
);

/* UN PROYECTO ESPECIFICO */
export const Cargar_Proyecto_Especifico = createAction(
  '[PROYECTOS MODULE] CARGAR PROYECTO MODAL CON LA ID',
  props<{ id: number; modal: boolean }>()
);
export const Correcto_Proyecto_Especifico = createAction(
  '[PROYECTOS MODULE] CARGA EXITOSA MODAL DEL PROYECTO CON LA ID',
  props<{ proyecto: models.ProjectModelComplete; modal: boolean }>()
);
export const Fallo_Proyecto_Especifico = createAction(
  '[PROYECTOS MODULE] CARGA FALLIDA DEL PROYECTO CON LA ID',
  props<{ fallida: HttpErrorResponse; modal: boolean }>()
);

/* modificar proyecto info */

export const Cargar_Modificar_Informacion_Proyecto = createAction(
  '[PROYECTOS MODULE] CARGAR MODIFICAR INFORMACION PROYECTO',
  props<{ id: number; informacion: models.ModelModificarDatosInformacion }>()
);
export const Correcto_Modificar_Informacion_Proyecto = createAction(
  '[PROYECTOS MODULE] CORRECTO MODIFICAR INFORMACION PROYECTO',
  props<{ successData: string }>()
);
export const Fallido_Modificar_Informacion_Proyecto = createAction(
  '[PROYECTOS MODULE] FALLIDO MODIFICAR INFORMACION PROYECTO',
  props<{ failedData: HttpErrorResponse }>()
);
export const Reiniciar_Modificar_Informacion_Proyecto = createAction(
  '[PROYECTOS MODULE] REINICIAR MODIFICAR INFORMACION PROYECTO'
);

/* codigo */

export const Cargar_Modificar_Codigo_Proyecto = createAction(
  '[PROYECTOS MODULE] CARGAR MODIFICAR CODIGO PROYECTO',
  props<{ id: number; modificarCodigo: { codigo: string } }>()
);
export const Correcto_Modificar_Codigo_Proyecto = createAction(
  '[PROYECTOS MODULE] CORRECTO MODIFICAR CODIGO PROYECTO',
  props<{ successData: string }>()
);
export const Fallido_Modificar_Codigo_Proyecto = createAction(
  '[PROYECTOS MODULE] FALLIDO MODIFICAR CODIGO PROYECTO',
  props<{ failedData: HttpErrorResponse }>()
);
export const Reiniciar_Modificar_Codigo_Proyecto = createAction(
  '[PROYECTOS MODULE] REINICIAR MODIFICAR CODIGO PROYECTO'
);

//
export const Cargar_Modificar_Usuario_Proyecto = createAction(
  '[PROYECTOS MODULE] CARGAR MODIFICAR USUARIO PROYECTO',
  props<{ id: number; modificarUsuario: { usuario: number } }>()
);
export const Correcto_Modificar_Usuario_Proyecto = createAction(
  '[PROYECTOS MODULE] CORRECTO MODIFICAR USUARIO PROYECTO',
  props<{ successData: string }>()
);
export const Fallido_Modificar_Usuario_Proyecto = createAction(
  '[PROYECTOS MODULE] FALLIDO MODIFICAR USUARIO PROYECTO',
  props<{ failedData: HttpErrorResponse }>()
);
export const Reiniciar_Modificar_Usuario_Proyecto = createAction(
  '[PROYECTOS MODULE] REINICIAR MODIFICAR USUARIO PROYECTO'
);
//
export const Cargar_Modificar_Aprobado_Proyecto = createAction(
  '[PROYECTOS MODULE] CARGAR MODIFICAR APROBADO PROYECTO',
  props<{ id: number; datosModificar: models.ModelModificarAprobadoProyecto }>()
);
export const Correcto_Modificar_Aprobado_Proyecto = createAction(
  '[PROYECTOS MODULE] CORRECTO MODIFICAR APROBADO PROYECTO',
  props<{ responseSv: string }>()
);
export const Fallido_Modificar_Aprobado_Proyecto = createAction(
  '[PROYECTOS MODULE] FALLIDO MODIFICAR APROBADO PROYECTO',
  props<{ failedData: HttpErrorResponse }>()
);
export const Reiniciar_Modificar_Aprobado_Proyecto = createAction(
  '[PROYECTOS MODULE] REINICIAR MODIFICAR APROBADO PROYECTO'
);

//
export const Cargar_Modificar_Aprobado_Desde_ComisionProyecto = createAction(
  '[PROYECTOS MODULE] CARGAR MODIFICAR APROBADO DESDE EL PROYECTO COMISION',
  props<{ id: number; datos: models.AumentarProyectoDesdeLaComision }>()
);
export const Correcto_Modificar_Aprobado_Desde_ComisionProyecto = createAction(
  '[PROYECTOS MODULE] CORRECTO MODIFICAR APROBADO DESDE EL PROYECTO COMISION',
  props<{ responseSv: string }>()
);
export const Fallido_Modificar_Aprobado_Desde_ComisionProyecto = createAction(
  '[PROYECTOS MODULE] FALLIDO MODIFICAR APROBADO DESDE EL PROYECTO COMISION',
  props<{ failedData: HttpErrorResponse }>()
);
export const Reiniciar_Modificar_Aprobado_Desde_ComisionProyecto = createAction(
  '[PROYECTOS MODULE] REINICIAR MODIFICAR APROBADO DESDE EL PROYECTO COMISION'
);

//conceptos
//registrar
export const Cargar_Registro_Concepto = createAction(
  '[PROYECTOS MODULE] CARGAR REGISTRAR CONCEPTO MODULO ADMINISTRADOR',
  props<{ concepto: models.CrearNuevoConceptoInterface }>()
);
export const Cargar_Eliminar_Concepto = createAction(
  '[PROYECTOS MODULE] CARGAR ELIMINAR CONCEPTO MODULO ADMINISTRADOR',
  props<{ idConcepto: number }>()
);
export const Correcto_Registro_Concepto = createAction(
  '[PROYECTOS MODULE] CORRECTO CONCEPTO MODULO ADMINISTRADOR',
  props<{ responseSv: string }>()
);
export const Fallido_Registro_Concepto = createAction(
  '[PROYECTOS MODULE] FALLIDO CONCEPTO MODULO ADMINISTRADOR',
  props<{ error: HttpErrorResponse }>()
);
export const Reiniciar_Registro_Concepto = createAction(
  '[PROYECTOS MODULE] REINICIAR CONCEPTO MODULO ADMINISTRADOR'
);

export const Cargar_Todos_Conceptos = createAction(
  '[PROYECTOS MODULE] CARGAR LISTA CONCEPTOS MODULO ADMINISTRADOR'
);
export const Correcto_Todos_Conceptos = createAction(
  '[PROYECTOS MODULE] CORRECTO LISTA CONCEPTOS MODULO ADMINISTRADOR',
  props<{ data: models.CrearNuevoConceptoInterface[] }>()
);

export const Fallido_Todos_Conceptos = createAction(
  '[PROYECTOS MODULE] FALLIDO LISTA CONCEPTOS MODULO ADMINISTRADOR',
  props<{ error: HttpErrorResponse }>()
);

//bancos

export const Cargar_Registro_Banco = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] CARGAR REGISTRO BANCO',
  props<{ data: models.CrearBancoModel }>()
);
export const Cargar_Eliminar_Banco = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] CARGAR ELIMINAR BANCO',
  props<{ id: number }>()
);
export const Correcto_Registro_Banco = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] CORRECTO REGISTRO O ELIMINAR BANCO',
  props<{ correcto: string }>()
);
export const Fallido_Registro_Banco = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] FALLIDO REGISTRO O ELIMINAR BANCO',
  props<{ error: HttpErrorResponse }>()
);
export const Reiniciar_Registro_Banco = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] REINICIAR REGISTRO O ELIMINAR BANCO'
);

//bancos all
export const Cargar_Todos_Los_Bancos = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] CARGAR TODOS LOS BANCOS'
);
export const Correcto_Todos_Los_Bancos = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] CORRECTO TODOS LOS BANCOS',
  props<{ bancos: models.bancosModel[] }>()
);
export const Fallido_Todos_Los_Bancos = createAction(
  '[PROYECTOS MODULE Y SOLICITANTES MODULE] FALLIDO TODOS LOS BANCOS',
  props<{ error: HttpErrorResponse }>()
);

//egresos directos
export const Cargar_Egreso_Directo_Proyecto = createAction(
  '[PROYECTOS MODULE] CARGAR EGRESOS DIRECTO',
  props<{id:number, egresoDatos}>()
)

export const Correcto_Egreso_Directo_Proyecto = createAction(
  '[PROYECTOS MODULE] CORRECTO EGRESOS DIRECTO',
  props<{correcto:string}>()
)

export const Fallido_Egreso_Directo_Proyecto = createAction(
  '[PROYECTOS MODULE] FALIDO EGRESOS DIRECTO',
  props<{error:HttpErrorResponse}>()
)
