import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSolicitanteComponent } from './inicio-solicitante/inicio-solicitante.component';

const routes: Routes = [
  {
    path:'',
    component:InicioSolicitanteComponent
  },
  {
    path:'modificar-cuenta',
    loadChildren: ()=>import('../modificar-cuenta/modificar-cuenta.module').then( m => m.ModificarCuentaModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitanteRoutingModule { }
