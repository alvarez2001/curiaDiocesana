import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './login/template/template.component';
import { TemplateInicioComponent } from "./administrador/templates/template-inicio/template-inicio.component";
import { PermitirIngresoUsuarioGuard } from './guards/permitir-ingreso-usuario.guard';
import { PermitirTipoUsuarioVistaGuard } from "./guards/permitir-tipo-usuario-vista.guard";

const routes: Routes = [
  {
    path:'',
    component:TemplateComponent,
    loadChildren:()=>import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'administrador',
    component:TemplateInicioComponent,
    loadChildren:()=>import('./administrador/administrador.module').then( m => m.AdministradorModule),
    data:{tipo:1},
    canActivate:[PermitirIngresoUsuarioGuard, PermitirTipoUsuarioVistaGuard],
    canLoad:[PermitirTipoUsuarioVistaGuard]
  },
  {
    path:'solicitante',
    component:TemplateInicioComponent,
    loadChildren:()=>import('./solicitante/solicitante.module').then( m => m.SolicitanteModule ),
    data:{tipo:0},
    canActivate:[PermitirIngresoUsuarioGuard, PermitirTipoUsuarioVistaGuard],
    canLoad:[PermitirTipoUsuarioVistaGuard]
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
