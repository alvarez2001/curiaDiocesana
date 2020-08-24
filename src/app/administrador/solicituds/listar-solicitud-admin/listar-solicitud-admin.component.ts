import { Component, OnInit } from '@angular/core';
import { SolicitudsNgrxService } from "../services/solicituds-ngrx.service";
import { SolicitudStateModel } from '../models/models-ngrx';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../models/solicitud-i';
import { SolicitudsService } from '../services/solicituds.service';
@Component({
  selector: 'app-listar-solicitud-admin',
  templateUrl: './listar-solicitud-admin.component.html',
  styleUrls: ['./listar-solicitud-admin.component.scss']
})
export class ListarSolicitudAdminComponent implements OnInit {

  SolicitudState$:Observable<SolicitudStateModel>

  constructor(private SolicitudNgrx:SolicitudsNgrxService,private solicitudSvc:SolicitudsService) { }

  ngOnInit(): void {
    this.SolicitudState$ = this.SolicitudNgrx.SeleccionarSolicitudesRealizas();
    this.cargarInfo();
  }

  cargarInfo():void{
    this.SolicitudNgrx.DispatchSolicitudPorAsignacionTasa()
  }

  mostrarInfo(data:SolicitudModel){
    this.solicitudSvc.ModalInfoSolicitud(data,0)
  }

}
