import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitanteRoutingModule } from './solicitante-routing.module';
import { InicioSolicitanteComponent } from './inicio-solicitante/inicio-solicitante.component';


@NgModule({
  declarations: [InicioSolicitanteComponent],
  imports: [
    CommonModule,
    SolicitanteRoutingModule
  ]
})
export class SolicitanteModule { }
