import { Component, OnInit } from '@angular/core';
import { NgrxServicesService } from '../services/ngrx-services.service';
import { Observable } from 'rxjs';
import { SolicitudesProyecto } from '../models/SolicitantesNrgx.Models';
import { ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/Global';


@Component({
  selector: 'app-listar-solicitudes-mias',
  templateUrl: './listar-solicitudes-mias.component.html',
  styleUrls: ['./listar-solicitudes-mias.component.scss']
})
export class ListarSolicitudesMiasComponent implements OnInit {

  stateSolicitanteSolicitudes$:Observable<SolicitudesProyecto>
  idProyecto:number;
  constructor(private SolicitanteNgrxSvc:NgrxServicesService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.stateSolicitanteSolicitudes$ = this.SolicitanteNgrxSvc.SeleccionarSolicitudesDelProyecto()
    this.idProyecto = +this.route.snapshot.params.id;
    this.cargarSolicitante(this.idProyecto);
  }

  cargarSolicitante(id:number):void{
    this.SolicitanteNgrxSvc.CargarSolicitudesProyecto(id)
  }


  descargarSolicitud(idSolicitud:number){
    window.open(`${Global.url}planilla/solicitud/${idSolicitud}`, 'Detalle de la solicitud')
  }

  revisarStatus(id:string):string{
    const idStatus = parseInt(id)

    switch (idStatus) {
      case 0:
        return 'Asignando tasa'
      case 5:
        return 'Revisando'
      case 1:
        return 'Autorizando'
      case 2:
        return 'Ejecutando'
      case 3:
        return 'Ejecutada'
      case 4:
        return 'Rechazada'
      default:
        return 'Comuniquese con el sistema'
    }
  }

}
