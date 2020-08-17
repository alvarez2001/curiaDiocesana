import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarActivosComponent } from "./listar-activos/listar-activos.component";
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarInactivosComponent } from "./listar-inactivos/listar-inactivos.component";
import { AgregarPermisosComponent } from "./agregar-permisos/agregar-permisos.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'crear-usuario'
  },
  {
    path:'crear-usuario',
    component:CrearUsuarioComponent
  },
  {
    path:'listar-inactivos',
    component:ListarInactivosComponent
  },
  {
    path:'listar-activos',
    component:ListarActivosComponent
  },
  {
    path:'control-permisos',
    component:AgregarPermisosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
