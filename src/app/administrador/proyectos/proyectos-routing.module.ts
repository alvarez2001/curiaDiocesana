import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { AgregarAliasProyectoComponent } from './agregar-alias-proyecto/agregar-alias-proyecto.component';
import { AgregarUsuarioProyectoComponent } from "./agregar-usuario-proyecto/agregar-usuario-proyecto.component";
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';
import { ModificarProyectoComponent } from "./modificar-proyecto/modificar-proyecto.component";

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
    path:'modificar-proyecto/:id',
    component:ModificarProyectoComponent
  },
  {
    path:'usuario-proyecto',
    component:AgregarUsuarioProyectoComponent
  },
  {
    path:'listar-proyectos',
    component:ListarProyectosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
