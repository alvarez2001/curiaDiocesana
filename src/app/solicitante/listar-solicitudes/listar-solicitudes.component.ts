import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosSolicitantesModule } from '../models/SolicitantesNrgx.Models';
import { NgrxServicesService } from '../services/ngrx-services.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.scss']
})
export class ListarSolicitudesComponent implements OnInit {

  seleccionarProyectos$:Observable<ProyectosSolicitantesModule>;

  constructor(private solicitudNgrxSvc:NgrxServicesService) {}

  ngOnInit(): void {
    this.seleccionarProyectos$ = this.solicitudNgrxSvc.SeleccionarProyectosSolicitantesSolicitud();
    this.cargarProyectos();
  }

  cargarProyectos(){
    this.solicitudNgrxSvc.cargarProyectosSolicitantesSolicitud();
  }

}
