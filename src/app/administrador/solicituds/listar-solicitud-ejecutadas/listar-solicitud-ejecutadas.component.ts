import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudStateModel } from '../models/models-ngrx';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SolicitudsService } from '../services/solicituds.service';
import { SolicitudModel } from '../models/solicitud-i';

@Component({
  selector: 'app-listar-solicitud-ejecutadas',
  templateUrl: './listar-solicitud-ejecutadas.component.html',
  styleUrls: ['./listar-solicitud-ejecutadas.component.scss']
})
export class ListarSolicitudEjecutadasComponent implements OnInit {
  SolicitudState$:Observable<SolicitudStateModel>

  constructor(private SolicitudNgrx:SolicitudsNgrxService,private solicitudSvc:SolicitudsService) { }

  ngOnInit(): void {
    this.SolicitudState$ = this.SolicitudNgrx.SeleccionarSolicitudesRealizas();
    this.cargarInfo();
  }

  cargarInfo():void{
    this.SolicitudNgrx.DispatchSolicitudesPorEjecutado()
  }

  mostrarInfo(data:SolicitudModel){
    this.solicitudSvc.ModalInfoSolicitud(data,3)
  }

}
