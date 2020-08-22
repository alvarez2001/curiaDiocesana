import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ListarProyectosComponent } from './listar-proyectos/listar-proyectos.component';
import { ModificarProyectoComponent } from "./modificar-proyecto/modificar-proyecto.component";
import { ModificarProyectoCodigoComponent } from './modificar-proyecto-codigo/modificar-proyecto-codigo.component';
import { ModificarProyectoUsuarioComponent } from './modificar-proyecto-usuario/modificar-proyecto-usuario.component';
import { AumentarProyectoComponent } from './aumentar-proyecto/aumentar-proyecto.component';
import { UsarComisionProyectosComponent } from "./usar-comision-proyectos/usar-comision-proyectos.component";
import { CrearConceptoComponent } from "./crear-concepto/crear-concepto.component";
import { ListarConceptosComponent } from "./listar-conceptos/listar-conceptos.component";
import { CrearBancoComponent } from "./crear-banco/crear-banco.component";
import { ListarBancosComponent } from "./listar-bancos/listar-bancos.component";

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
  },
  {
    path:'aumentar-proyecto/aprobado',
    component:AumentarProyectoComponent
  },
  {
    path:'aumentar-proyecto/aprobado-desde-comision',
    component:UsarComisionProyectosComponent
  },
  {
    path:'conceptos/registrar',
    component:CrearConceptoComponent
  },
  {
    path:'conceptos/listar',
    component:ListarConceptosComponent
  },
  {
    path:'bancos/registrar',
    component:CrearBancoComponent
  },
  {
    path:'bancos/listar',
    component:ListarBancosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
