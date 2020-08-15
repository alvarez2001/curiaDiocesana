import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarCuentaRoutingModule } from './modificar-cuenta-routing.module';
import { ModificarDatosComponent } from './modificar-datos/modificar-datos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerMisDatosComponent } from './ver-mis-datos/ver-mis-datos.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModificarCuentaModuleEffects } from "./ngrxStates/modificarCuenta.effects";
import { keyStoreModuleModificarCuenta } from "./ngrxStates/modificarCuenta.actions";
import * as reducers from './ngrxStates/modificarCuenta.reducers';


const ngrxImports = [
  StoreModule.forFeature(keyStoreModuleModificarCuenta,{
    modifiedData:reducers.ModificarCuenta,
    detailUserActive:reducers.GetDetailUserCuenta,
    passwordChange:reducers.ChangePasswordState
  }),
  EffectsModule.forFeature([
    ModificarCuentaModuleEffects
  ])
]

@NgModule({
  declarations: [ModificarDatosComponent, VerMisDatosComponent, CambiarClaveComponent],
  imports: [
    CommonModule,
    ...ngrxImports,
    ModificarCuentaRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModificarCuentaModule { }
