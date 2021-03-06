import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [InicioSesionComponent, RegistrarseComponent, RecuperarPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
