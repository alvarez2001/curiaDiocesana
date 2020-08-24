import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitanteRoutingModule } from './solicitante-routing.module';
import { InicioSolicitanteComponent } from './inicio-solicitante/inicio-solicitante.component';
import { AgregarSolicitudComponent } from './agregar-solicitud/agregar-solicitud.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { keySolicitantesModule } from "./ngrx/solicitante.actions";
import { SolicitanteServiceService } from "./services/solicitante-service.service";
import { TodosLosBancos, RegistroEliminarBanco } from "../administrador/proyectos/ngrxStates/proyectos.reducers";
import { ProjectsEffects } from '../administrador/proyectos/ngrxStates/proyectos.effects';
import { SolicitantesEffects } from "./ngrx/solicitante.effects";
import { ProjectsService } from '../administrador/proyectos/services/projects.service';
import { MatDialogModule } from '@angular/material/dialog';
import * as reducers from "./ngrx/reducers.solicitante";
import { SharedModule } from "../modules/shared/shared.module";

const ngrxImports = [
  StoreModule.forFeature(keySolicitantesModule,{
    todosLosBancos:TodosLosBancos,
    registrarEliminarBanco:RegistroEliminarBanco,
    proyectosSolicitantesSolicitud:reducers.ProyectosSolicitantesSolicitud,
    ConceptosSolicitantesState:reducers.ConceptosSolicitantesState,
    StateSolicitudRegistrar:reducers.StateSolicitudRegistrar
  }),
  EffectsModule.forFeature([
    ProjectsEffects,
    SolicitantesEffects
  ])
]

@NgModule({
  declarations: [InicioSolicitanteComponent, AgregarSolicitudComponent, ListarSolicitudesComponent],
  imports: [
    CommonModule,
    ...ngrxImports,
    ReactiveFormsModule,
    SolicitanteRoutingModule,
    MatDialogModule,
    SharedModule,
  ],
  providers:[
    SolicitanteServiceService,
    ProjectsService,
  ]
})
export class SolicitanteModule { }
