import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { DatosReportesDiaState } from '../models/models-ngrx';
import { Global } from 'src/app/services/Global';
import { MatDialog } from '@angular/material/dialog';
import { ReporteEgresosMensualesModalComponent } from '../reporte-egresos-mensuales-modal/reporte-egresos-mensuales-modal.component';
import { SolicitudsService } from '../services/solicituds.service';
import { ModalesService } from '../services/modales.service';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';

@Component({
  selector: 'app-ingresos-listado',
  templateUrl: './ingresos-listado.component.html',
  styleUrls: ['./ingresos-listado.component.scss']
})
export class IngresosListadoComponent implements OnInit {

  @ViewChild('fecha') fecha:ElementRef
  DatosReporteDia$:Observable<DatosReportesDiaState>

  constructor(private solicitudNgrxSvc:SolicitudsNgrxService) { }

  ngOnInit(): void {
    this.DatosReporteDia$ = this.solicitudNgrxSvc.SeleccionarStateReportesPorDia()


  }

  ngAfterViewInit(){
    const observable = fromEvent(this.fecha.nativeElement, 'change')
    observable
    .pipe(
      debounceTime(1000),
      map((value:any) => value.target.value)
    )
    .subscribe((res:string) => {
      if(res !== ''){
        this.consultar(res)
      }
    })
  }

  ngOnDestroy(){
    this.solicitudNgrxSvc.ReiniciarReportePorDia()
  }

  consultar(fecha:string){
    this.solicitudNgrxSvc.DispatchCargarReportesPorDiaIngresos(fecha)
  }

  generarPdfIngreso(idIngreso:number){
      window.open(`${Global.url}planilla/ingreso/${idIngreso}`, 'Reporte Ingreso')
  }


}
