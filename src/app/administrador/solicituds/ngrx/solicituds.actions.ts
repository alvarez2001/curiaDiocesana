import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from '@angular/common/http';
import { SolicitudModel } from "../models/solicitud-i";

export const KeySolicitudsAdmin = '[MODULO SOLICITUDS ADMIN]'

export const CargarSolicitudesPorAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] CARGAR SOLICITUDES POR ASIGNAR TASA');
export const CargarSolicitudesPorRevision = createAction('[MODULO SOLICITUDES ADMIN] CARGAR SOLICITUDES POR REVISION');
export const CargarSolicitudesRevisadas = createAction('[MODULO SOLICITUDES ADMIN] CARGAR SOLICITUDES REVISADAS');
export const CargarSolicitudesPorAutorizacion = createAction('[MODULO SOLICITUDES ADMIN] CARGAR SOLICITUDES POR AUTORIZACION');
export const CargarSolicitudesPorEjecutado = createAction('[MODULO SOLICITUDES ADMIN] CARGAR SOLICITUDES POR EJECUTADO');
export const CargarSolicitudesRechazadas = createAction('[MODULO SOLICITUDES ADMIN] CARGAR SOLICITUDES RECHAZADAS');
export const CorrectoSolicitudesLista = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO SOLICITUDES LISTA', props<{data:SolicitudModel[]}>())
export const FallidoSolicitudesLista = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO SOLICITUDES LISTA', props<{error:HttpErrorResponse}>())


export const CargarAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] CARGAR ASIGNAR TASA', props<{idSolicitud:number, tasa:{tasa:number, codigo?:string}}>())
export const CorrectoAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO ASIGNAR TASA',props<{correcto:string}>())
export const FallidoAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO ASIGNAR TASA', props<{error:HttpErrorResponse, comprobar:{tasa:number, codigo?:string}}>())
export const IntroducirClaveAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] INTRODUCIR CLAVE ASIGNAR TASA')
export const IntroducirCorrectaClaveAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] INTRODUCIR CLAVE CORRECTO ASIGNAR TASA')
export const ReiniciarAsignarTasa = createAction('[MODULO SOLICITUDES ADMIN] REINICIAR ASIGNAR TASA')


export const CargarGenerarCodigoAumentoTasa = createAction('[MODULO SOLICITUDES] CARGAR GENERADOR CODIGO AUMENTO TASA')
export const CorrectoGenerarCodigoAumentoTasa = createAction('[MODULO SOLICITUDES] CORRECTO GENERADOR CODIGO AUMENTO TASA', props<{correcto:string}>())
export const FallidoGenerarCodigoAumentoTasa = createAction('[MODULO SOLICITUDES] FALLIDO GENERADOR CODIGO AUMENTO TASA', props<{error:HttpErrorResponse}>())



export const CargarSolicitarClave = createAction('[MODULO ESPECIAL] CARGAR SOLICITAR CLAVE');
export const CorrectoSolicitarClave = createAction('[MODULO ESPECIAL] CORRECTO SOLICITAR CLAVE', props<{correcto:string}>())
export const FallidoSolicitarClave = createAction('[MODULO ESPECIAL] FALLIDO SOLICITAR CLAVE', props<{error:HttpErrorResponse}>())


export const CargarRevisarSolicitud = createAction('[MODULO SOLICITUDES ADMIN] CARGAR REVISAR SOLICITUD', props<{solicitud:number}>())
export const CargarRechazarSolicitud = createAction('[MODULO SOLICITUDES ADMIN] CARGAR RECHAZAR SOLICITUD', props<{solicitud:number}>())
export const CargarAutorizarSolicitud = createAction('[MODULO SOLICITUDES ADMIN] CARGAR AUTORIZAR SOLICITUD', props<{solicitud:number}>())

export const CorrectoProcesoSolicitud = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO PROCESO SOLICITUD',props<{correcto:string}>())
export const FallidoProcesoSolicitud = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO PROCESO SOLICITUD', props<{error:HttpErrorResponse}>())
export const ReiniciarProcesoSolicitud = createAction('[MODULO SOLICITUDES ADMIN] REINICIAR PROCESO SOLICITUD')
