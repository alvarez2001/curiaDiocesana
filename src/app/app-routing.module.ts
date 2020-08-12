import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './login/template/template.component';
import { TemplateInicioComponent } from "./administrador/templates/template-inicio/template-inicio.component";

const routes: Routes = [
  {
    path:'',
    component:TemplateComponent,
    loadChildren:()=>import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'administrador',
    component:TemplateInicioComponent,
    loadChildren:()=>import('./administrador/administrador.module').then( m => m.AdministradorModule)
  },
  {
    path:'solicitante',
    component:TemplateInicioComponent,
    loadChildren:()=>import('./solicitante/solicitante.module').then( m => m.SolicitanteModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
