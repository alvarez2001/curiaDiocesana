import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { SeparadorMilesDirective } from 'src/app/directivas/separador-miles.directive';
import { AgregarAliasProyectoComponent } from './agregar-alias-proyecto/agregar-alias-proyecto.component';
import { AgregarUsuarioProyectoComponent } from './agregar-usuario-proyecto/agregar-usuario-proyecto.component';


@NgModule({
  declarations: [SeparadorMilesDirective,CrearProyectoComponent, AgregarAliasProyectoComponent, AgregarUsuarioProyectoComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
