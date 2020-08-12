import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';

const routes: Routes = [
  {
    path:'',
    component:InicioSesionComponent
  },
  {
    path:'registro',
    component:RegistrarseComponent
  },
  {
    path:'recuperar',
    component:RecuperarPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
