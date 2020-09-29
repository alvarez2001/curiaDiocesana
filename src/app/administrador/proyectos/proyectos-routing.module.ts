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
import { PermitirSegunPermisoGuard } from 'src/app/guards/permitir-segun-permiso.guard';
import { EgresoDirectosComponent } from './egreso-directos/egreso-directos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'crear-proyecto'
  },
  {
    path:'crear-proyecto',
    component:CrearProyectoComponent,
    data:{permiso:['Nuevo proyecto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'modificar-proyecto/:id/informacion',
    component:ModificarProyectoComponent,
    data:{permiso:['Modificar proyecto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'modificar-proyecto/:id/codigo',
    component:ModificarProyectoCodigoComponent,
    data:{permiso:['Modificar proyecto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'modificar-proyecto/:id/usuario',
    component:ModificarProyectoUsuarioComponent,
    data:{permiso:['Modificar proyecto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'listar-proyectos',
    component:ListarProyectosComponent,
    data:{permiso:['Ver proyectos']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'aumentar-proyecto/aprobado',
    component:AumentarProyectoComponent,
    data:{permiso:['Aumentar aprobado proyecto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'aumentar-proyecto/aprobado-desde-comision',
    component:UsarComisionProyectosComponent,
    data:{permiso:['Aumentar aprobado proyecto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'egresos-directo',
    component:EgresoDirectosComponent,
    data:{permiso:['Egreso directo']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'conceptos/registrar',
    component:CrearConceptoComponent,
    data:{permiso:['Nuevo concepto']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'conceptos/listar',
    component:ListarConceptosComponent
  },
  {
    path:'bancos/registrar',
    component:CrearBancoComponent,
    data:{permiso:['Nuevo banco']},
    canActivate:[PermitirSegunPermisoGuard]
  },
  {
    path:'bancos/listar',
    component:ListarBancosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
