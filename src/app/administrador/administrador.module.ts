import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { TemplateUsuarioComponent } from './templates/template-usuario/template-usuario.component';
import { PanelAdministradorComponent } from "./panel-administrador/panel-administrador.component";
import { ProyectosModule } from './proyectos/proyectos.module';
import { TabPanelUsuarioComponent } from './panel-administrador/tab-panel-usuario/tab-panel-usuario.component';
import { TabPanelProyectosComponent } from './panel-administrador/tab-panel-proyectos/tab-panel-proyectos.component';


@NgModule({
  declarations: [ InicioAdministradorComponent, TemplateUsuarioComponent,PanelAdministradorComponent, TabPanelUsuarioComponent, TabPanelProyectosComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ProyectosModule
  ]
})
export class AdministradorModule { }
