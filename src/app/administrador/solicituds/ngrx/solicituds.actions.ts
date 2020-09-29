import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from '@angular/common/http';
import { SolicitudModel, EgresosIngresosModel, EjecucionSolicitud, ModeloPersonalizada } from "../models/solicitud-i";

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

export const CargarReportePorDia = createAction('[MODULO SOLICITUDES ADMIN] CARGAR REPORTES POR DIA EGRESOS', props<{fecha:string}>())
export const CargarReportePorDiaIngresos = createAction('[MODULO SOLICITUDES ADMIN] CARGAR REPORTES POR DIA INGRESOS', props<{fecha:string}>())
export const CargarReportePorDiaEgresosDirecto = createAction('[MODULO SOLICITUDES ADMIN] CARGAR REPORTES POR DIA EGRESOS DIRECTOS', props<{fecha:string}>())
/* export const CargarBusquedaPersonalizada = createAction('[Modulo solicitudes admin] Cargar busqueda personalizada reporte', props<{busqueda:ModeloPersonalizada}>()) */

export const CorrectoReportePorDia = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO REPORTES POR DIA', props<{data:EgresosIngresosModel[]}>())
export const FallidoReportePorDia = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO REPORTES POR DIA', props<{error:HttpErrorResponse}>())
export const ReiniciarReportePorDia = createAction('[MODULO SOLICITUDES ADMIN] REINICIAR REPORTES POR DIA')

export const CargarRegistrarOperacion = createAction('[MODULO SOLICITUDES ADMIN] CARGAR REGISTRAR OPERACION', props<{idSolicitud:number, data:EjecucionSolicitud}>())
export const CorrectoRegistrarOperacion = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO REGISTRAR OPERACION', props<{correcto:string}>())
export const FallidoRegistrarOperacion = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO REGISTRAR OPERACION', props<{error:HttpErrorResponse}>())
export const ReiniciarRegistrarOperacion = createAction('[MODULO SOLICITUDES ADMIN] REINICIAR REGISTRAR OPERACION')

export const CargarEgresoDetallado = createAction('[MODULO SOLICITUDES ADMIN] CARGAR EGRESO DETALLADO ', props<{idEgreso:number}>())
export const CorrectoEgresoDetallado = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO EGRESO DETALLADO ', props<{correcto:EgresosIngresosModel}>())
export const FallidoEgresoDetallado = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO EGRESO DETALLADO ', props<{error:HttpErrorResponse}>())


export const CargarAnularEgreso = createAction('[MODULO SOLICITUDES ADMIN] CARGAR ANULAR EGRESO', props<{idEgreso:number}>())
export const CorrectoAnularEgreso = createAction('[MODULO SOLICITUDES ADMIN] CORRECTO ANULAR EGRESO', props<{correcto:string}>())
export const FallidoAnularEgreso = createAction('[MODULO SOLICITUDES ADMIN] FALLIDO ANULAR EGRESO', props<{error:HttpErrorResponse}>())
export const ReiniciarAnularEgreso = createAction('[MODULO SOLICITUDES ADMIN] REINICIAR ANULAR EGRESO')




