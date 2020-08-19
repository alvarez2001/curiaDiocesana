import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
import { TemplateUsuarioComponent } from './templates/template-usuario/template-usuario.component';

import { ProyectosModule } from './proyectos/proyectos.module';



@NgModule({
  declarations: [ InicioAdministradorComponent, TemplateUsuarioComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ProyectosModule
  ]
})
export class AdministradorModule { }
