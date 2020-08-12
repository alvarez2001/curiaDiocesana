import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSolicitanteComponent } from './inicio-solicitante/inicio-solicitante.component';

const routes: Routes = [
  {
    path:'',
    component:InicioSolicitanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitanteRoutingModule { }
