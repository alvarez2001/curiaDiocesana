import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { AgregarAliasProyectoComponent } from './agregar-alias-proyecto/agregar-alias-proyecto.component';
import { AgregarUsuarioProyectoComponent } from "./agregar-usuario-proyecto/agregar-usuario-proyecto.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'crear-proyecto'
  },
  {
    path:'crear-proyecto',
    component:CrearProyectoComponent
  },
  {
    path:'modificar-proyecto',
    component:AgregarAliasProyectoComponent
  },
  {
    path:'usuario-proyecto',
    component:AgregarUsuarioProyectoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
