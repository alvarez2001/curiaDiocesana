import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { SeparadorMilesDirective } from 'src/app/directivas/separador-miles.directive';
import { AgregarAliasProyectoComponent } from './agregar-alias-proyecto/agregar-alias-proyecto.component';
import { AgregarUsuarioProyectoComponent } from './agregar-usuario-proyecto/agregar-usuario-proyecto.component';
import { FormateadorMilesDirective } from 'src/app/directivas/formateador-miles.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { KeyProjectsFeature } from './ngrxStates/proyectos.actions';
import { ProjectsEffects } from './ngrxStates/proyectos.effects';
import * as reducers from './ngrxStates/proyectos.reducers';
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { DetalleProyectoModalComponent } from './detalle-proyecto-modal/detalle-proyecto-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsService } from './services/projects.service';
import { ModificarProyectoComponent } from './modificar-proyecto/modificar-proyecto.component';

const ngrxImports = [
  StoreModule.forFeature(KeyProjectsFeature, {
    registrarProyecto: reducers.ProjectRegister,
    usersSolicitantes:reducers.UsersSolicitantes,
    projectsAll:reducers.ProjectsPaginateOrProjectsAll,
    proyectoEspecifico:reducers.ProyectoEspecifico,
    modificarInfoProyecto:reducers.ProyectoModificarInformacion
  }),
  EffectsModule.forFeature([ProjectsEffects]),
];

@NgModule({
  declarations: [
    SeparadorMilesDirective,
    CrearProyectoComponent,
    AgregarAliasProyectoComponent,
    AgregarUsuarioProyectoComponent,
    FormateadorMilesDirective,
    ListarProyectosComponent,
    DetalleProyectoComponent,
    DetalleProyectoModalComponent,
    ModificarProyectoComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ...ngrxImports,
    ReactiveFormsModule,
    ProyectosRoutingModule,
  ],
  entryComponents:[
    DetalleProyectoModalComponent
  ],
  providers:[
    ProjectsService
  ]
})
export class ProyectosModule {}
