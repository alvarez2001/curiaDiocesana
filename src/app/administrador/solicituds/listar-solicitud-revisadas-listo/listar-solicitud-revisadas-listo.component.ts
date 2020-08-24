import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudStateModel } from '../models/models-ngrx';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SolicitudsService } from '../services/solicituds.service';
import { SolicitudModel } from '../models/solicitud-i';

@Component({
  selector: 'app-listar-solicitud-revisadas-listo',
  templateUrl: './listar-solicitud-revisadas-listo.component.html',
  styleUrls: ['./listar-solicitud-revisadas-listo.component.scss']
})
export class ListarSolicitudRevisadasListoComponent implements OnInit {


  SolicitudState$:Observable<SolicitudStateModel>

  constructor(private SolicitudNgrx:SolicitudsNgrxService,private solicitudSvc:SolicitudsService) { }

  ngOnInit(): void {
    this.SolicitudState$ = this.SolicitudNgrx.SeleccionarSolicitudesRealizas();
    this.cargarInfo();
  }

  cargarInfo():void{
    this.SolicitudNgrx.DispatchSolicitudesRevisadas()
  }

  mostrarInfo(data:SolicitudModel){
    this.solicitudSvc.ModalInfoSolicitud(data,1)
  }

}
