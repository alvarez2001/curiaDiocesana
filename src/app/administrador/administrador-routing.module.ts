import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdministradorComponent } from "./inicio-administrador/inicio-administrador.component";
import { TemplateUsuarioComponent } from './templates/template-usuario/template-usuario.component';

const routes: Routes = [
  {
    path:'',
    component:InicioAdministradorComponent
  },
  {
    path:'usuarios',
    component:TemplateUsuarioComponent,
    loadChildren:()=>import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
  },
  {
    path:'proyectos',
    component:TemplateUsuarioComponent,
    loadChildren:()=>import('./proyectos/proyectos.module').then( m => m.ProyectosModule )
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
