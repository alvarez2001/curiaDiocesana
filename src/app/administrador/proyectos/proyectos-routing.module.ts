import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';
import { ModificarProyectoComponent } from "./modificar-proyecto/modificar-proyecto.component";
import { ModificarProyectoCodigoComponent } from './modificar-proyecto-codigo/modificar-proyecto-codigo.component';
import { ModificarProyectoUsuarioComponent } from './modificar-proyecto-usuario/modificar-proyecto-usuario.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'crear-proyecto'
  },
  {
    path:'crear-proyecto',
    component:CrearProyectoComponent
  },
  {
    path:'modificar-proyecto/:id/informacion',
    component:ModificarProyectoComponent
  },
  {
    path:'modificar-proyecto/:id/codigo',
    component:ModificarProyectoCodigoComponent
  },
  {
    path:'modificar-proyecto/:id/usuario',
    component:ModificarProyectoUsuarioComponent
  },
  {
    path:'listar-proyectos',
    component:ListarProyectosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
