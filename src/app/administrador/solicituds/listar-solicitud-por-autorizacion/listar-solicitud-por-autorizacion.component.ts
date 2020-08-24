import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudStateModel } from '../models/models-ngrx';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SolicitudsService } from '../services/solicituds.service';
import { SolicitudModel } from '../models/solicitud-i';

@Component({
  selector: 'app-listar-solicitud-por-autorizacion',
  templateUrl: './listar-solicitud-por-autorizacion.component.html',
  styleUrls: ['./listar-solicitud-por-autorizacion.component.scss']
})
export class ListarSolicitudPorAutorizacionComponent implements OnInit {

  SolicitudState$:Observable<SolicitudStateModel>

  constructor(private SolicitudNgrx:SolicitudsNgrxService,private solicitudSvc:SolicitudsService) { }

  ngOnInit(): void {
    this.SolicitudState$ = this.SolicitudNgrx.SeleccionarSolicitudesRealizas();
    this.cargarInfo();
  }

  cargarInfo():void{
    this.SolicitudNgrx.DispatchSolicitudesPorAutorizacion()
  }

  mostrarInfo(data:SolicitudModel){
    this.solicitudSvc.ModalInfoSolicitud(data,2)
  }

}
