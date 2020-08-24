import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { SeparadorMilesDirective } from 'src/app/directivas/separador-miles.directive';
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
import { ModificarProyectoCodigoComponent } from './modificar-proyecto-codigo/modificar-proyecto-codigo.component';
import { ModificarProyectoUsuarioComponent } from './modificar-proyecto-usuario/modificar-proyecto-usuario.component';
import { AumentarProyectoComponent } from './aumentar-proyecto/aumentar-proyecto.component';
import { AprobadoComponent } from './aumentar-proyecto/aprobado/aprobado.component';
import { UsarComisionProyectosComponent } from './usar-comision-proyectos/usar-comision-proyectos.component';
import { ComisionComponent } from './usar-comision-proyectos/comision/comision.component';
import { CrearConceptoComponent } from './crear-concepto/crear-concepto.component';
import { ListarConceptosComponent } from './listar-conceptos/listar-conceptos.component';
import { CrearBancoComponent } from './crear-banco/crear-banco.component';
import { ListarBancosComponent } from './listar-bancos/listar-bancos.component';
import { InfoBancoComponent } from './info-banco/info-banco.component';
import { SharedModule } from "../../modules/shared/shared.module";

const ngrxImports = [
  StoreModule.forFeature(KeyProjectsFeature, {
    registrarProyecto: reducers.ProjectRegister,
    usersSolicitantes: reducers.UsersSolicitantes,
    projectsAll: reducers.ProjectsPaginateOrProjectsAll,
    proyectoEspecifico: reducers.ProyectoEspecifico,
    modificarInfoProyecto: reducers.ProyectoModificarInformacion,
    modificarCodigoProyecto: reducers.ProyectoModificarCodigo,
    modificarUsuarioProyecto: reducers.ProyectoModificarUsuario,
    modificarAprobadoProyecto: reducers.ProyectoModificarAprobado,
    aumentarProyectoDesdeComision:
      reducers.AumentarProyectoDesdeElProyectoComision,
    conceptoRegistrarEliminar: reducers.registroConceptoAdmin,
    conceptosTodos: reducers.ListadoConceptosAdmin,
    registrarEliminarBanco:reducers.RegistroEliminarBanco,
    todosLosBancos:reducers.TodosLosBancos
  }),
  EffectsModule.forFeature([ProjectsEffects]),
];

@NgModule({
  declarations: [

    CrearProyectoComponent,
    FormateadorMilesDirective,
    ListarProyectosComponent,
    DetalleProyectoComponent,
    DetalleProyectoModalComponent,
    ModificarProyectoComponent,
    ModificarProyectoCodigoComponent,
    ModificarProyectoUsuarioComponent,
    AumentarProyectoComponent,
    AprobadoComponent,
    UsarComisionProyectosComponent,
    ComisionComponent,
    CrearConceptoComponent,
    ListarConceptosComponent,
    CrearBancoComponent,
    ListarBancosComponent,
    InfoBancoComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ...ngrxImports,
    ReactiveFormsModule,
    ProyectosRoutingModule,
    SharedModule,
  ],
  entryComponents: [DetalleProyectoModalComponent,InfoBancoComponent],
  providers: [ProjectsService],
})
export class ProyectosModule {}
