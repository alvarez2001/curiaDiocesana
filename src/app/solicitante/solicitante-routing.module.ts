import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSolicitanteComponent } from './inicio-solicitante/inicio-solicitante.component';
import { AgregarSolicitudComponent } from './agregar-solicitud/agregar-solicitud.component';
import { ListarSolicitudesComponent } from './listar-solicitudes/listar-solicitudes.component';
import { CrearBancoComponent } from './crear-banco/crear-banco.component';
import { ListarBancoComponent } from './listar-banco/listar-banco.component';
import { ListarSolicitudesMiasComponent } from './listar-solicitudes-mias/listar-solicitudes-mias.component';

const routes: Routes = [
  {
    path:'',
    component:InicioSolicitanteComponent
  },
  {
    path:'agregar-solicitud',
    component:AgregarSolicitudComponent
  },
  {
    path:'listar/proyectos',
    component:ListarSolicitudesComponent
  },
  {
    path:'listar/solicitud/:id',
    component:ListarSolicitudesMiasComponent
  },
  {
    path:'bancos',
    redirectTo:'bancos/crear'
  },
  {
    path:'bancos/crear',
    component:CrearBancoComponent
  },
  {
    path:'bancos/listar',
    component:ListarBancoComponent
  },
  {
    path:'modificar-cuenta',
    loadChildren: ()=>import('../modificar-cuenta/modificar-cuenta.module').then( m => m.ModificarCuentaModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitanteRoutingModule { }
