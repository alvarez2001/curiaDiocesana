import { createAction, props } from "@ngrx/store";
import { proyectosUsuarioSolicitanteAddSolicitud, SolicitudAgregar } from '../models/solicitantes.models';
import { HttpErrorResponse } from '@angular/common/http';
import { CrearNuevoConceptoInterface } from 'src/app/administrador/proyectos/models/project.models';

export const keySolicitantesModule = 'Solicitantes Modulo';


export const Cargar_Proyectos_Solicitante = createAction('[SOLICITANTES MODULO] CARGAR PROYECTOS SOLICITANTES');
export const Correcto_Proyectos_Solicitante = createAction('[SOLICITANTES MODULO] CORRECTO PROYECTOS SOLICITANTES',props<{proyectos:proyectosUsuarioSolicitanteAddSolicitud[]}>())
export const Fallido_Proyectos_Solicitantes = createAction('[SOLICITANTES MODULO] FALLIDO PROYECTOS SOLICITANTES', props<{error:HttpErrorResponse}>())

export const CargarConceptosSolicitantes = createAction('[SOLICITANTES MODULO] CARGAR CONCEPTOS SOLICITANTES')
export const CorrectoConceptosSolicitantes = createAction('[SOLICITANTES MODULO] CORRECTO CONCEPTOS SOLICITANTES', props<{solicitantes:CrearNuevoConceptoInterface[]}>())
export const FallidoConceptosSolicitantes = createAction('[SOLICITANTES MODULO] FALLIDO CONCEPTOS SOLICITANTES',props<{error:HttpErrorResponse}>())

export const CargarGuardarSolicitud = createAction('[SOLICITANTES MODULO] CARGA GUARDAR SOLICITUD', props<{idProyecto:number,idBanco:number,solicitud:SolicitudAgregar}>())
export const CorrectoGuardarSolicitud = createAction('[SOLICITANTES MODULO] CORRECTO GUARDAR SOLICITUD', props<{correcto:string}>())
export const FallidoGuardarSolicitud = createAction('[SOLICITANTES MODULO] FALLIDO GUARDAR SOLICITUD', props<{error:HttpErrorResponse}>())
