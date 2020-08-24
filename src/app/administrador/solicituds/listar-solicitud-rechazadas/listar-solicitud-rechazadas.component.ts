import { Component, OnInit } from '@angular/core';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SolicitudModel } from '../models/solicitud-i';
import { Observable } from 'rxjs';
import { SolicitudStateModel } from '../models/models-ngrx';
import { SolicitudsService } from '../services/solicituds.service';

@Component({
  selector: 'app-listar-solicitud-rechazadas',
  templateUrl: './listar-solicitud-rechazadas.component.html',
  styleUrls: ['./listar-solicitud-rechazadas.component.scss']
})
export class ListarSolicitudRechazadasComponent implements OnInit {

  SolicitudState$:Observable<SolicitudStateModel>

  constructor(private SolicitudNgrx:SolicitudsNgrxService,private solicitudSvc:SolicitudsService) { }

  ngOnInit(): void {
    this.SolicitudState$ = this.SolicitudNgrx.SeleccionarSolicitudesRealizas();
    this.cargarInfo();
  }

  cargarInfo():void{
    this.SolicitudNgrx.DispatchSolicitudesRechazadas()
  }

  mostrarInfo(data:SolicitudModel){
    this.solicitudSvc.ModalInfoSolicitud(data,4)
  }

}
