import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarActivosComponent } from "./listar-activos/listar-activos.component";
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarInactivosComponent } from "./listar-inactivos/listar-inactivos.component";
import { AgregarPermisosComponent } from "./agregar-permisos/agregar-permisos.component";
import { PermitirSegunPermisoGuard } from "src/app/guards/permitir-segun-permiso.guard";

const routes: Routes = [
  {
    path:'',
    redirectTo:'crear-usuario'
  },
  {
    path:'crear-usuario',
    component:CrearUsuarioComponent,
    data:{permiso:['Nuevo usuario']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar-inactivos',
    component:ListarInactivosComponent,
    data:{permiso:['Activar usuario', 'Desactivar usuario']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar-activos',
    component:ListarActivosComponent,
    data:{permiso:['Activar usuario', 'Desactivar usuario']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'control-permisos',
    component:AgregarPermisosComponent,
    data:{permiso:['Asignar permiso', 'Revocar permiso']},
    canActivate:[PermitirSegunPermisoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
