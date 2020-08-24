import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarSolicitudAdminComponent } from "./listar-solicitud-admin/listar-solicitud-admin.component";
import { ListarSolicitudAdminRevisadasComponent } from './listar-solicitud-admin-revisadas/listar-solicitud-admin-revisadas.component';
import { ListarSolicitudRevisadasListoComponent } from './listar-solicitud-revisadas-listo/listar-solicitud-revisadas-listo.component';
import { ListarSolicitudPorAutorizacionComponent } from './listar-solicitud-por-autorizacion/listar-solicitud-por-autorizacion.component';
import { ListarSolicitudEjecutadasComponent } from './listar-solicitud-ejecutadas/listar-solicitud-ejecutadas.component';
import { ListarSolicitudRechazadasComponent } from './listar-solicitud-rechazadas/listar-solicitud-rechazadas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'listar/solicitud'
  },
  {
    path:'listar/solicitud',
    component:ListarSolicitudAdminComponent
  },
  {
    path:'listar/revision',
    component:ListarSolicitudAdminRevisadasComponent
  },
  {
    path:'listar/autorizacion',
    component:ListarSolicitudRevisadasListoComponent
  },
  {
    path:'listar/ejecucion',
    component:ListarSolicitudPorAutorizacionComponent
  },
  {
    path:'listar/ejecutados',
    component:ListarSolicitudEjecutadasComponent
  },
  {
    path:'listar/rechazadas',
    component:ListarSolicitudRechazadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudsRoutingModule { }
