import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ListarInactivosComponent } from './listar-inactivos/listar-inactivos.component';
import { AgregarPermisosComponent } from './agregar-permisos/agregar-permisos.component';
import { ListarPermisosComponent } from './listar-permisos/listar-permisos.component';
import { ListarActivosComponent } from './listar-activos/listar-activos.component';

import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';

import * as indexUsersNgrx from "./statesNgrx";
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from "./statesNgrx/usuarios.effects";
import { InfoUsuariosListadosComponent } from './info-usuarios-listados/info-usuarios-listados.component';


const ngrxImport = [
  StoreModule.forFeature(indexUsersNgrx.keyStoreModule,{
    DataRegisterAdmin:indexUsersNgrx.registerAdmin,
    ListUsersInactiveOrActive:indexUsersNgrx.listUsers,
    userStatus:indexUsersNgrx.userStatus,
    ListAdmins:indexUsersNgrx.listAdmins,
    ListPermisos:indexUsersNgrx.StateAllPermisos,
    PermisosUser:indexUsersNgrx.StateAllPermisosUser,
    AddOrTrashPermiso:indexUsersNgrx.permisosAsignarRevocarState
  }),
  EffectsModule.forFeature([
    UsersEffects
  ])
];


@NgModule({
  declarations: [InicioUsuarioComponent, CrearUsuarioComponent, ListarInactivosComponent, ListarActivosComponent, AgregarPermisosComponent,InfoUsuariosListadosComponent, ListarPermisosComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ...ngrxImport,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    UsuariosRoutingModule
  ],
  entryComponents:[
    InfoUsuariosListadosComponent
  ]
})
export class UsuariosModule { }
