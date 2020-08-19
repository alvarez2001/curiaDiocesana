import { props, createAction } from "@ngrx/store";
import * as models from '../models/project.models';
import { HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../../usuarios/models/usersInactive.models';


export const KeyProjectsFeature = 'Proyectos Modulo';


export const Load_Register_Project = createAction('[CREAR-PROYECTOS COMPONENT] LOAD REGISTER PROJECT', props<{dataProject:models.ProjectModel}>());

export const Success_Register_Project = createAction('[CREAR-PROYECTOS COMPONENT] SUCCESS REGISTER PROJECT', props<{successData:string}>());

export const Failed_Register_Project = createAction('[CREAR-PROYECTOS COMPONENT] FAILED REGISTER PROJECT', props<{FailedData:HttpErrorResponse}>());

export const Complete_Register_Project = createAction('[CREAR-PROYECTOS COMPONENT] COMPLETE REGISTER PROJECT');

export const Load_Users_Solicitantes = createAction('[USUARIOS BUSQUEDA] LOAD USERS SOLICITANTES')
export const Success_Users_Solicitantes = createAction('[USUARIOS BUSQUEDA] SUCCESS USERS SOLICITANTES',props<{users:UserModel[]}>());
export const Failed_Users_Solicitantes = createAction('[USUARIOS BUSQUEDA] FAILED USERS SOLICITANTES',props<{failedData:HttpErrorResponse}>())


export const Load_Projects_AllPaginate = createAction('[PROYECTOS MODULE] LOAD PROJECTS PAGINATE PAGINADOS')
export const Load_Projects_All = createAction('[PROYECTOS MODULE] LOAD PROJECTS All SIN PAGINAR')
export const LoadPaginate_Projects_AllPaginate = createAction('[PROYECTOS MODULE] LOAD PROJECTS ALL PAGINATE PAGINA', props<{paginate:string}>());
export const Success_Projects_AllPaginate = createAction('[PROYECTOS MODULE] SUCCESS PROJECTS PAGINATE O SIN PAGINAR',props<{projects:models.PaginateProjectsComplete}>())
export const Failed_Projects_AllPaginate = createAction('[PROYECTOS MODULE] FAILED PROJECTS PAGINATE O SIN PAGINAR', props<{FailedData:HttpErrorResponse}>())



/* UN PROYECTO ESPECIFICO */
export const Cargar_Proyecto_Especifico = createAction('[PROYECTOS MODULE] CARGAR PROYECTO MODAL CON LA ID',props<{id:number,modal:boolean}>())
export const Correcto_Proyecto_Especifico = createAction('[PROYECTOS MODULE] CARGA EXITOSA MODAL DEL PROYECTO CON LA ID', props<{proyecto:models.ProjectModelComplete,modal:boolean}>())
export const Fallo_Proyecto_Especifico = createAction('[PROYECTOS MODULE] CARGA FALLIDA DEL PROYECTO CON LA ID', props<{fallida:HttpErrorResponse, modal:boolean}>())

/* modificar proyecto */

export const Cargar_Modificar_Informacion_Proyecto = createAction('[PROYECTOS MODULE] CARGAR MODIFICAR INFORMACION PROYECTO', props<{id:number,informacion:models.ModelModificarDatosInformacion}>())
export const Correcto_Modificar_Informacion_Proyecto = createAction('[PROYECTOS MODULE] CORRECTO MODIFICAR INFORMACION PROYECTO',props<{successData:string}>())
export const Fallido_Modificar_Informacion_Proyecto = createAction('[PROYECTOS MODULE] FALLIDO MODIFICAR INFORMACION PROYECTO',props<{failedData:HttpErrorResponse}>())
export const Reiniciar_Modificar_Informacion_Proyecto = createAction('[PROYECTOS MODULE] REINICIAR MODIFICAR INFORMACION PROYECTO')
