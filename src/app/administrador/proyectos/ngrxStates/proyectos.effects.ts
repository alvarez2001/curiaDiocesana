import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as actions from './proyectos.actions';
import { Store } from '@ngrx/store';
import { ProjectsService } from '../services/projects.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';
import { loadOn, loadOff } from 'src/app/actions/app-actions';
import { Global } from 'src/app/services/Global';

@Injectable()
export class ProjectsEffects {
  loadProjectRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Load_Register_Project),
      mergeMap(({ dataProject }) =>
        this.projectSvc.registerProject(dataProject).pipe(
          map((value) =>
            actions.Success_Register_Project({ successData: value })
          ),
          catchError((error) =>
            of(actions.Failed_Register_Project({ FailedData: error }))
          )
        )
      )
    )
  );

  FailedProjectRegister = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Failed_Register_Project),
        mergeMap(({ FailedData }) =>
          of(this.sharedSvc.mostrarAlertError(FailedData))
        )
      ),
    { dispatch: false }
  );

  loadUsersSolicitante = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Load_Users_Solicitantes),
      mergeMap(() =>
        this.projectSvc.UsuariosSolicitantesLista().pipe(
          map((value) => actions.Success_Users_Solicitantes({ users: value })),
          catchError((error) => of(actions.Failed_Users_Solicitantes(error)))
        )
      )
    )
  );

  FailedUsersSolicitante = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Failed_Users_Solicitantes),
        mergeMap(({ failedData }) =>
          of(this.sharedSvc.mostrarAlertError(failedData))
        )
      ),
    { dispatch: false }
  );

  /* PROJECTS */

  Load_Projects_AllPaginate = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Load_Projects_AllPaginate),
      mergeMap(() =>
        this.projectSvc.proyectosPaginados().pipe(
          map((value) =>
            actions.Success_Projects_AllPaginate({ projects: value })
          ),
          catchError((error) =>
            of(actions.Failed_Projects_AllPaginate({ FailedData: error }))
          )
        )
      )
    )
  );

  Load_Projects_AllPaginateSearch = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Load_Projects_Search),
      mergeMap(({valor}) =>
        this.projectSvc.cargarProyectoBusquedaXnombre(valor).pipe(
          map((value) =>
            actions.Success_Projects_AllPaginate({ projects: value })
          ),
          catchError((error) =>
            of(actions.Failed_Projects_AllPaginate({ FailedData: error }))
          )
        )
      )
    )
  );

  cargarProyectoBusquedaXnombre
  LoadPaginate_Projects_AllPaginate = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.LoadPaginate_Projects_AllPaginate),
      mergeMap(({ paginate }) =>
        this.projectSvc.PaginateProjects(paginate).pipe(
          map((value) =>
            actions.Success_Projects_AllPaginate({ projects: value })
          ),
          catchError((error) =>
            of(actions.Failed_Projects_AllPaginate({ FailedData: error }))
          )
        )
      )
    )
  );

  Load_Projects_All = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Load_Projects_All),
      mergeMap(() =>
        this.projectSvc.proyectosSinPaginar().pipe(
          map((value) =>
            actions.Success_Projects_AllPaginate({ projects: value })
          ),
          catchError((error) =>
            of(actions.Failed_Projects_AllPaginate({ FailedData: error }))
          )
        )
      )
    )
  );

  //ESPECIFICO

  CargarProyectoEspecifico = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Proyecto_Especifico),
      mergeMap(({ id, modal }) => {
        this.store.dispatch(loadOn());
        return this.projectSvc.InformacionDelProyecto(id).pipe(
          map((value) =>
            actions.Correcto_Proyecto_Especifico({
              proyecto: value,
              modal: modal,
            })
          ),
          catchError((error) =>
            of(
              actions.Fallo_Proyecto_Especifico({
                fallida: error,
                modal: modal,
              })
            )
          )
        );
      })
    )
  );

  CorrectoProyectoEspecifico = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Correcto_Proyecto_Especifico),
      mergeMap(({ proyecto, modal }) => {
        if (modal) {
          this.projectSvc.mostrarModalInfoProyecto(proyecto);
        }
        return of(loadOff());
      })
    )
  );

  FalloProyectoEspecifico = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Fallo_Proyecto_Especifico),
      mergeMap(({ fallida, modal }) => {
        if (!modal && fallida.status === 404) {
          this.sharedSvc.redirigirDondeQuiera(
            'administrador/proyectos/listar-proyectos'
          );
        } else {
          this.sharedSvc.mostrarAlertError(fallida);
        }
        return of(loadOff());
      })
    )
  );

  /* MODIFICAR PROYECTO */

  CargarModificarProyectoInfo = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Informacion_Proyecto),
      mergeMap(({ id, informacion }) =>
        this.projectSvc.modificarProyectoInfo(id, informacion).pipe(
          map((value) =>
            actions.Correcto_Modificar_Informacion_Proyecto({
              successData: value,
            })
          ),
          catchError((error) =>
            of(
              actions.Fallido_Modificar_Informacion_Proyecto({
                failedData: error,
              })
            )
          )
        )
      )
    )
  );

  FallidoModificarProyectoInfo = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Modificar_Informacion_Proyecto),
        mergeMap(({ failedData }) =>
          of(this.sharedSvc.mostrarAlertError(failedData))
        )
      ),
    { dispatch: false }
  );

  CargarModificarProyectoCodigo = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Codigo_Proyecto),
      mergeMap(({ id, modificarCodigo }) =>
        this.projectSvc.modificarProyectoCodigo(id, modificarCodigo).pipe(
          map((val) =>
            actions.Correcto_Modificar_Codigo_Proyecto({ successData: val })
          ),
          catchError((error) =>
            of(actions.Fallido_Modificar_Codigo_Proyecto({ failedData: error }))
          )
        )
      )
    )
  );

  FallidoModificarProyectoCodigo = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Modificar_Codigo_Proyecto),
        mergeMap(({ failedData }) =>
          of(this.sharedSvc.mostrarAlertError(failedData))
        )
      ),
    { dispatch: false }
  );

  CargarModificarProyectoUsuario = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Usuario_Proyecto),
      mergeMap(({ id, modificarUsuario }) =>
        this.projectSvc.modificarProyectoUsuario(id, modificarUsuario).pipe(
          map((val) =>
            actions.Correcto_Modificar_Usuario_Proyecto({ successData: val })
          ),
          catchError((error) =>
            of(
              actions.Fallido_Modificar_Usuario_Proyecto({ failedData: error })
            )
          )
        )
      )
    )
  );

  FallidoModificarProyectoUsuario = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Modificar_Usuario_Proyecto),
        mergeMap(({ failedData }) =>
          of(this.sharedSvc.mostrarAlertError(failedData))
        )
      ),
    { dispatch: false }
  );

  // modificar aprobado

  CargarModificarAprobadoProyecto = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Aprobado_Proyecto),
      mergeMap(({ datosModificar, id }) =>
        this.projectSvc.modificarProyectoAprobado(id, datosModificar).pipe(
          map((value) =>
            actions.Correcto_Modificar_Aprobado_Proyecto({ responseSv: value })
          ),
          catchError((error) =>
            of(
              actions.Fallido_Modificar_Aprobado_Proyecto({ failedData: error })
            )
          )
        )
      )
    )
  );

  FallidoModificarAprobadoProyecto = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Modificar_Aprobado_Proyecto),
        mergeMap(({ failedData }) =>
          of(this.sharedSvc.mostrarAlertError(failedData))
        )
      ),
    { dispatch: false }
  );

  //

  CargarAumentarProyectoDesdeElProyectoComision = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Modificar_Aprobado_Desde_ComisionProyecto),
      mergeMap(({ id, datos }) =>
        this.projectSvc
          .AumentarProyectoDesdeLaComisionDeLosProyectos(id, datos)
          .pipe(
            map((respuesta) =>
              actions.Correcto_Modificar_Aprobado_Desde_ComisionProyecto({
                responseSv: respuesta,
              })
            ),
            catchError((error) =>
              of(
                actions.Fallido_Modificar_Aprobado_Desde_ComisionProyecto({
                  failedData: error,
                })
              )
            )
          )
      )
    )
  );

  FallidoAumentarProyectoDesdeElProyectoComision = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Modificar_Aprobado_Desde_ComisionProyecto),
        mergeMap(({ failedData }) =>
          of(this.sharedSvc.mostrarAlertError(failedData))
        )
      ),
    {
      dispatch: false,
    }
  );

  cargarRegistroConcepto = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Registro_Concepto),
      mergeMap(({ concepto }) =>
        this.projectSvc.registrarConcepto(concepto).pipe(
          map((value) =>
            actions.Correcto_Registro_Concepto({ responseSv: value })
          ),
          catchError((error) =>
            of(actions.Fallido_Registro_Concepto({ error: error }))
          )
        )
      )
    )
  );

  cargarEliminarConcepto = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Eliminar_Concepto),
      mergeMap(({ idConcepto }) =>
        this.projectSvc.eliminarConcepto(idConcepto).pipe(
          map((value) =>
            actions.Correcto_Registro_Concepto({ responseSv: value })
          ),
          catchError((error) =>
            of(actions.Fallido_Registro_Concepto({ error: error }))
          )
        )
      )
    )
  );

  ErrorRegistroConcepto = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Registro_Concepto),
        mergeMap(({ error }) => of(this.sharedSvc.mostrarAlertError(error)))
      ),
    { dispatch: false }
  );

  cargarTodosLosConceptos = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Todos_Conceptos),
      mergeMap(() =>
        this.projectSvc.conceptosTodos().pipe(
          map((value) => actions.Correcto_Todos_Conceptos({ data: value })),
          catchError((error) =>
            of(actions.Fallido_Todos_Conceptos({ error: error }))
          )
        )
      )
    )
  );

  ErrorTodosLosConceptos = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Todos_Conceptos),
        mergeMap(({ error }) => of(this.sharedSvc.mostrarAlertError(error)))
      ),
    { dispatch: false }
  );

  cargarRegistroBanco = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Registro_Banco),
      mergeMap(({ data }) =>
        this.projectSvc.registarBanco(data).pipe(
          map((value) => actions.Correcto_Registro_Banco({ correcto: value })),
          catchError((error) =>
            of(actions.Fallido_Registro_Banco({ error: error }))
          )
        )
      )
    )
  );

  cargarEliminarBanco = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.Cargar_Eliminar_Banco),
      mergeMap(({ id }) =>
        this.projectSvc.eliminarBanco(id).pipe(
          map((value) => actions.Correcto_Registro_Banco({ correcto: value })),
          catchError((error) =>
            of(actions.Fallido_Registro_Banco({ error: error }))
          )
        )
      )
    )
  );

  FallidoRegistroEliminarBanco = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.Fallido_Registro_Banco),
        mergeMap(({ error }) => of(this.sharedSvc.mostrarAlertError(error)))
      ),
    { dispatch: false }
  );

  cargarTodosLosBancos = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Cargar_Todos_Los_Bancos),
    mergeMap(()=>this.projectSvc.todosLosBancos().pipe(
      map(val => actions.Correcto_Todos_Los_Bancos({bancos:val})),
      catchError(error => of(actions.Fallido_Todos_Los_Bancos({error:error})))
    ))
  ))

  FallidoTodosLosBancos = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Fallido_Todos_Los_Bancos),
    mergeMap(({error})=>of(this.sharedSvc.mostrarAlertError(error)))
  ),{dispatch:false})



  CargarEgresoDirecto = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Cargar_Egreso_Directo_Proyecto),
    mergeMap(({egresoDatos,id})=>this.projectSvc.EgresoDirecto(id,egresoDatos).pipe(
      map((value)=>{
        window.open(`${Global.url}planilla/egreso/directo/${value.id}`)
        return actions.Correcto_Egreso_Directo_Proyecto({correcto:value.mensaje})
      }),
      catchError(error => of(actions.Fallido_Egreso_Directo_Proyecto({error:error})))
    ))
  ))

  CorrectoEgresoDirecto = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Correcto_Egreso_Directo_Proyecto),
    mergeMap(({correcto})=>of(this.sharedSvc.mostrarAlertSuccess(correcto)))
  ),{dispatch:false})

  FallidoEgresoDirecto = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.Fallido_Egreso_Directo_Proyecto),
    mergeMap(({error})=>of(this.sharedSvc.mostrarAlertError(error)))
  ),{dispatch:false})


  constructor(
    private actions$: Actions,
    private store: Store,
    private projectSvc: ProjectsService,
    private sharedSvc: SharedService
  ) {}
}
