import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { VerMisDatosComponent } from './ver-mis-datos/ver-mis-datos.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';

const routes: Routes = [
  {
    path:'',
    component:VerMisDatosComponent
  },
  {
    path:'modificar-datos',
    component:ModificarDatosComponent
  },
  {
    path:'modificar-clave',
    component:CambiarClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarCuentaRoutingModule { }
