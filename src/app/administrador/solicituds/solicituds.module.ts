import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudsRoutingModule } from './solicituds-routing.module';
import { ListarSolicitudAdminComponent } from './listar-solicitud-admin/listar-solicitud-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { KeySolicitudsAdmin } from "./ngrx/solicituds.actions";
import { SolicitudsEffectsModule } from "./ngrx/solicituds.effects";
import * as reducers from "./ngrx/solicituds.reducers";
import { InfoSolicitudModelComponent } from './info-solicitud-model/info-solicitud-model.component';
import { SolicitudsService } from './services/solicituds.service';
import { AsignarTasaModalComponent } from './asignar-tasa-modal/asignar-tasa-modal.component';
import { SolicitudsNgrxService } from './services/solicituds-ngrx.service';
import { ModalesService } from "./services/modales.service";
import { SharedService } from 'src/app/services/shared/shared.service';
import { IntroducirClaveSeguridadComponent } from './introducir-clave-seguridad/introducir-clave-seguridad.component';
import { ListarSolicitudAdminRevisadasComponent } from './listar-solicitud-admin-revisadas/listar-solicitud-admin-revisadas.component';
import { ListarSolicitudRevisadasListoComponent } from './listar-solicitud-revisadas-listo/listar-solicitud-revisadas-listo.component';
import { ListarSolicitudPorAutorizacionComponent } from './listar-solicitud-por-autorizacion/listar-solicitud-por-autorizacion.component';
import { ListarSolicitudEjecutadasComponent } from './listar-solicitud-ejecutadas/listar-solicitud-ejecutadas.component';
import { ListarSolicitudRechazadasComponent } from './listar-solicitud-rechazadas/listar-solicitud-rechazadas.component';

const ngrxImports = [
  StoreModule.forFeature(KeySolicitudsAdmin,{
    StateSolicitudsRealizadas:reducers.StateSolicitudsRealizadas,
    StateProcesoSolicitud:reducers.StateProcesoSolicitud,
    StateAsignarTasa:reducers.StateAsignarTasa,
    StateGenerarCodigo:reducers.StateGenerarCodigo
  }),
  EffectsModule.forFeature([
    SolicitudsEffectsModule
  ])
]

@NgModule({
  declarations: [ListarSolicitudAdminComponent, InfoSolicitudModelComponent, AsignarTasaModalComponent, IntroducirClaveSeguridadComponent, ListarSolicitudAdminRevisadasComponent, ListarSolicitudRevisadasListoComponent, ListarSolicitudPorAutorizacionComponent, ListarSolicitudEjecutadasComponent, ListarSolicitudRechazadasComponent],
  imports: [
    CommonModule,
    ...ngrxImports,
    ReactiveFormsModule,
    MatDialogModule,
    SolicitudsRoutingModule,
    SharedModule
  ],
  providers:[
    SolicitudsService,
    ModalesService,
    SharedService,
    SolicitudsNgrxService
  ],
  entryComponents:[
    InfoSolicitudModelComponent,
    AsignarTasaModalComponent,
    IntroducirClaveSeguridadComponent
  ]
})
export class SolicitudsModule { }