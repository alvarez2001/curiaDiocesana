import { on, createReducer, Action } from '@ngrx/store';
import * as modelsNgrx from '../models/ngrxModelsProjects';
import * as actions from './proyectos.actions';
import { AdminsStateModel, BasicDatas } from '../../usuarios/models/usersInactive.models';

const initialProject: modelsNgrx.RegisterProjectState = {
  loading: false,
  success: 3,
  responseSv: null,
};

const _ProjectRegister = createReducer(
  initialProject,
  on(actions.Load_Register_Project, (state, { dataProject }) => {
    return {
      ...state,
      loading: true,
      success: 3,
      responseSv: null,
    };
  }),
  on(actions.Success_Register_Project, (state, { successData }) => {
    return {
      ...state,
      loading: false,
      success: 1,
      responseSv: successData,
    };
  }),
  on(actions.Failed_Register_Project, (state, { FailedData }) => {
    return {
      ...state,
      loading: false,
      success: 2,
      responseSv: 'Ha ocurrido un error',
    };
  }),
  on(actions.Complete_Register_Project, (state) => {
    return {
      ...state,
      loading: false,
      success: 3,
      responseSv: null,
    };
  })
);

export function ProjectRegister(
  state: modelsNgrx.RegisterProjectState,
  action: Action
) {
  return _ProjectRegister(state, action);
}

const initialUsersSolicitante: AdminsStateModel = {
  loading: false,
  success: 3,
  dataAdmin: [],
};

const _UsersSolicitantes = createReducer(
  initialUsersSolicitante,
  on(actions.Load_Users_Solicitantes, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      dataAdmin: [],
    };
  }),
  on(actions.Success_Users_Solicitantes, (state, { users }) => {
    return {
      ...state,
      loading: false,
      success: 1,
      dataAdmin: users,
    };
  }),
  on(actions.Failed_Users_Solicitantes, (state, { failedData }) => {
    return {
      ...state,
      loading: false,
      success: 2,
    };
  })
);

export function UsersSolicitantes(state: AdminsStateModel, action: Action) {
  return _UsersSolicitantes(state, action);
}

const initialStateProjectsPaginate: modelsNgrx.PaginateProjectsState = {
  loading: false,
  success: 3,
  dataProjects: null,
};

const _ProjectsPaginateOrProjectsAll = createReducer(
  initialStateProjectsPaginate,
  on(actions.Load_Projects_AllPaginate, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      dataProjects: null,
    };
  }),
  on(actions.Load_Projects_Search, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      dataProjects: null,
    };
  }),
  on(actions.LoadPaginate_Projects_AllPaginate, (state, { paginate }) => {
    return {
      ...state,
      loading: true,
      success: 3,
      dataProjects: null,
    };
  }),
  on(actions.Load_Projects_All, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      dataProjects: null,
    };
  }),
  on(actions.Success_Projects_AllPaginate, (state, { projects }) => {
    return {
      ...state,
      loading: false,
      success: 1,
      dataProjects: projects,
    };
  }),
  on(actions.Failed_Projects_AllPaginate, (state, { FailedData }) => {
    return {
      ...state,
      success: 2,
      loading: false,
      dataProjects: null,
    };
  })
);
export function ProjectsPaginateOrProjectsAll(
  state: modelsNgrx.PaginateProjectsState,
  action: Action
) {
  return _ProjectsPaginateOrProjectsAll(state, action);
}

const inicialProyectoEspecifico: modelsNgrx.ProyectoEspecificoState = {
  loading: false,
  success: 3,
  Proyecto: null,
};

const _ProyectoEspecifico = createReducer(
  inicialProyectoEspecifico,
  on(actions.Cargar_Proyecto_Especifico, (state, { id, modal }) => {
    return {
      ...state,
      loading: true,
      success: 3,
      Proyecto: null,
    };
  }),

  on(actions.Correcto_Proyecto_Especifico, (state, { proyecto, modal }) => {
    return {
      ...state,
      loading: false,
      success: 1,
      Proyecto: proyecto,
    };
  }),

  on(actions.Fallo_Proyecto_Especifico, (state, { fallida }) => {
    return {
      ...state,
      loading: false,
      success: 2,
    };
  })
);

export function ProyectoEspecifico(
  state: modelsNgrx.ProyectoEspecificoState,
  action: Action
) {
  return _ProyectoEspecifico(state, action);
}

const initialStateModificarProyecto: modelsNgrx.RegisterProjectState = {
  success: 3,
  loading: false,
  responseSv: null,
};

const _ProyectoModificarInformacion = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Modificar_Informacion_Proyecto, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      responseSv: null,
    };
  }),
  on(
    actions.Correcto_Modificar_Informacion_Proyecto,
    (state, { successData }) => {
      return {
        ...state,
        loading: false,
        success: 1,
        responseSv: successData,
      };
    }
  ),
  on(actions.Fallido_Modificar_Informacion_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 2,
      responseSv: 'Ha ocurrido un error',
    };
  }),
  on(actions.Reiniciar_Modificar_Informacion_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 3,
      responseSv: null,
    };
  })
);
export function ProyectoModificarInformacion(
  state: modelsNgrx.RegisterProjectState,
  action: Action
) {
  return _ProyectoModificarInformacion(state, action);
}

const _ProyectoModificarCodigo = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Modificar_Codigo_Proyecto, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      responseSv: null,
    };
  }),
  on(actions.Correcto_Modificar_Codigo_Proyecto, (state, { successData }) => {
    return {
      ...state,
      loading: false,
      success: 1,
      responseSv: successData,
    };
  }),
  on(actions.Fallido_Modificar_Codigo_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 2,
      responseSv: null,
    };
  }),
  on(actions.Reiniciar_Modificar_Codigo_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 3,
      responseSv: null,
    };
  })
);

export function ProyectoModificarCodigo(
  state: modelsNgrx.RegisterProjectState,
  action: Action
) {
  return _ProyectoModificarCodigo(state, action);
}

/* MODIFICAR USUARIO PROYECTO */

const _ProyectoModificarUsuario = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Modificar_Usuario_Proyecto, (state) => {
    return {
      ...state,
      loading: true,
      success: 3,
      responseSv: null,
    };
  }),
  on(actions.Correcto_Modificar_Usuario_Proyecto, (state, { successData }) => {
    return {
      ...state,
      loading: false,
      success: 1,
      responseSv: successData,
    };
  }),
  on(actions.Fallido_Modificar_Usuario_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 2,
      responseSv: null,
    };
  }),
  on(actions.Reiniciar_Modificar_Usuario_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 3,
      responseSv: null,
    };
  })
);

export function ProyectoModificarUsuario(
  state: modelsNgrx.RegisterProjectState,
  action: Action
) {
  return _ProyectoModificarUsuario(state, action);
}

const _ProyectoModificarAprobado = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Modificar_Aprobado_Proyecto, (state) => {
    return {
      ...state,
      success: 3,
      responseSv: null,
      loading: true,
    };
  }),
  on(actions.Correcto_Modificar_Aprobado_Proyecto, (state, { responseSv }) => {
    return {
      ...state,
      success: 1,
      loading: false,
      responseSv: responseSv,
    };
  }),
  on(actions.Fallido_Modificar_Aprobado_Proyecto, (state, { failedData }) => {
    return {
      ...state,
      loading: false,
      success: 2,
      responseSv: 'Ha ocurrido un error, intente nuevamente',
    };
  }),
  on(actions.Reiniciar_Modificar_Aprobado_Proyecto, (state) => {
    return {
      ...state,
      loading: false,
      success: 3,
      responseSv: null,
    };
  })
);

export function ProyectoModificarAprobado(
  state: modelsNgrx.RegisterProjectState,
  action: Action
) {
  return _ProyectoModificarAprobado(state, action);
}

const _AumentarProyectoDesdeElProyectoComision = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Modificar_Aprobado_Desde_ComisionProyecto,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Correcto_Modificar_Aprobado_Desde_ComisionProyecto, (state, {responseSv})=>{
    return {
      ...state,
      loading:false,
      responseSv:responseSv,
      success:1
    }
  }),
  on(actions.Fallido_Modificar_Aprobado_Desde_ComisionProyecto, (state)=>{
    return {
      ...state,
      loading:false,
      responseSv:'Ha ocurrido un error, intente nuevamente',
      success:2
    }
  }),
  on(actions.Reiniciar_Modificar_Aprobado_Desde_ComisionProyecto,(state)=>{
    return {
      ...state,
      loading:false,
      responseSv:null,
      success:3
    }
  })
)

export function AumentarProyectoDesdeElProyectoComision(state:modelsNgrx.RegisterProjectState,action:Action){
  return _AumentarProyectoDesdeElProyectoComision(state,action)
}


const _registroConceptoAdmin = createReducer(
  initialStateModificarProyecto,
  on(actions.Cargar_Registro_Concepto, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Cargar_Eliminar_Concepto, (state)=> {
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Correcto_Registro_Concepto,(state, {responseSv})=>{
    return {
      ...state,
      loading:false,
      success:1,
      responseSv:responseSv
    }
  }),
  on(actions.Fallido_Registro_Concepto,(state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      responseSv:'Ha ocurrido un error, intente nuevamente'
    }
  }),
  on(actions.Reiniciar_Registro_Concepto,(state)=>{
    return {
      ...state,
      loading:false,
      success:3,
      responseSv:null
    }
  })
)

export function registroConceptoAdmin(state:modelsNgrx.RegisterProjectState,action:Action){
  return _registroConceptoAdmin(state,action);
}

const initialStateConceptosListado:modelsNgrx.ConceptosState = {
  loading:false,
  success:3,
  data:[]
}

const _ListadoConceptosAdmin = createReducer(
  initialStateConceptosListado,
  on(actions.Cargar_Todos_Conceptos,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.Correcto_Todos_Conceptos,(state, {data})=>{
    return {
      ...state,
      loading:false,
      success:1,
      data:data
    }
  }),
  on(actions.Fallido_Todos_Conceptos, (state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      data:[]
    }
  })
)

export function ListadoConceptosAdmin(state:modelsNgrx.ConceptosState,action:Action){
  return _ListadoConceptosAdmin(state,action)
}

const _RegistroEliminarBanco = createReducer(
  initialStateModificarProyecto ,
  on(actions.Cargar_Registro_Banco,(state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Cargar_Eliminar_Banco, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      responseSv:null
    }
  }),
  on(actions.Correcto_Registro_Banco, (state, {correcto})=>{
    return {
      ...state,
      loading:false,
      success:1,
      responseSv:correcto
    }
  }),
  on(actions.Fallido_Registro_Banco, (state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      responseSv:'Ha ocurrido un error, intente nuevamente'
    }
  }),
  on(actions.Reiniciar_Registro_Banco,(state)=>{
    return {
      ...state,
      loading:false,
      success:3,
      responseSv:null
    }
  })
)


export function RegistroEliminarBanco(state:modelsNgrx.RegisterProjectState,action:Action){
  return _RegistroEliminarBanco(state,action)
}


const initialStateBancos:modelsNgrx.BancosState = {
  loading:false,
  success:3,
  data:[]
}

const _TodosLosBancos = createReducer(
  initialStateBancos,
  on(actions.Cargar_Todos_Los_Bancos, (state)=>{
    return {
      ...state,
      loading:true,
      success:3,
      data:[]
    }
  }),
  on(actions.Correcto_Todos_Los_Bancos, (state, {bancos})=>{
    return {
      ...state,
      loading:false,
      success:1,
      data:bancos
    }
  }),
  on(actions.Fallido_Todos_Los_Bancos, (state)=>{
    return {
      ...state,
      loading:false,
      success:2,
      data:[]
    }
  })
)

export function TodosLosBancos(state:modelsNgrx.BancosState, action:Action){
  return _TodosLosBancos(state,action)
}


const initialEgresoDirectos:BasicDatas = {
  loading:false,
  success:3
}

const _EgresoDirecto = createReducer(
  initialEgresoDirectos,
  on(actions.Cargar_Egreso_Directo_Proyecto, (state)=>{
    return {
      ...state,
      loading:true,
      success:3
    }
  }),
  on(actions.Correcto_Egreso_Directo_Proyecto, (state)=>{
    return {
      ...state,
      loading:false,
      success:1
    }
  }),
  on(actions.Fallido_Egreso_Directo_Proyecto, (state)=>{
    return {
      ...state,
      loading:false,
      success:2
    }
  })
)

export function EgresoDirecto(state:BasicDatas, action:Action){
  return _EgresoDirecto(state,action);
}
