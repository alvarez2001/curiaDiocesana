import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarSolicitudAdminComponent } from "./listar-solicitud-admin/listar-solicitud-admin.component";
import { ListarSolicitudAdminRevisadasComponent } from './listar-solicitud-admin-revisadas/listar-solicitud-admin-revisadas.component';
import { ListarSolicitudRevisadasListoComponent } from './listar-solicitud-revisadas-listo/listar-solicitud-revisadas-listo.component';
import { ListarSolicitudPorAutorizacionComponent } from './listar-solicitud-por-autorizacion/listar-solicitud-por-autorizacion.component';
import { ListarSolicitudEjecutadasComponent } from './listar-solicitud-ejecutadas/listar-solicitud-ejecutadas.component';
import { ListarSolicitudRechazadasComponent } from './listar-solicitud-rechazadas/listar-solicitud-rechazadas.component';
import { ReporteListadoComponent } from './reporte-listado/reporte-listado.component';
import { PermitirSegunPermisoGuard } from 'src/app/guards/permitir-segun-permiso.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'listar/solicitud'
  },
  {
    path:'listar/solicitud',
    component:ListarSolicitudAdminComponent,
    data:{permiso:['Asignar tasa','Rechazar solicitud', 'Revisar solicitud','Autorizar solicitud','Ejecutar solicitud']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar/revision',
    component:ListarSolicitudAdminRevisadasComponent,
    data:{permiso:['Asignar tasa','Rechazar solicitud', 'Revisar solicitud','Autorizar solicitud','Ejecutar solicitud']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar/autorizacion',
    component:ListarSolicitudRevisadasListoComponent,
    data:{permiso:['Asignar tasa','Rechazar solicitud', 'Revisar solicitud','Autorizar solicitud','Ejecutar solicitud']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar/ejecucion',
    component:ListarSolicitudPorAutorizacionComponent,
    data:{permiso:['Asignar tasa','Rechazar solicitud', 'Revisar solicitud','Autorizar solicitud','Ejecutar solicitud']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar/ejecutados',
    component:ListarSolicitudEjecutadasComponent,
    data:{permiso:['Asignar tasa','Rechazar solicitud', 'Revisar solicitud','Autorizar solicitud','Ejecutar solicitud']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar/rechazadas',
    component:ListarSolicitudRechazadasComponent,
    data:{permiso:['Asignar tasa','Rechazar solicitud', 'Revisar solicitud','Autorizar solicitud','Ejecutar solicitud']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'reportes',
    redirectTo:'reportes/egresos'
  },
  {
    path:'reportes/egresos',
    component:ReporteListadoComponent,
    data:{permiso:['Solicitar reportes']},
    canActivate:[PermitirSegunPermisoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudsRoutingModule { }
