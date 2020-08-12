import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarInactivosComponent } from './listar-inactivos/listar-inactivos.component';
import { ListarActivosComponent } from './listar-activos/listar-activos.component';
import { AgregarPermisosComponent } from './agregar-permisos/agregar-permisos.component';
import { EliminarPermisosComponent } from './eliminar-permisos/eliminar-permisos.component';



@NgModule({
  declarations: [InicioUsuarioComponent, CrearUsuarioComponent, ListarInactivosComponent, ListarActivosComponent, AgregarPermisosComponent, EliminarPermisosComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
