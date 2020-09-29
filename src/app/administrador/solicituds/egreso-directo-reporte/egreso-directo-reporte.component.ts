import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { DatosReportesDiaState } from '../models/models-ngrx';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { debounceTime, map } from 'rxjs/operators';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-egreso-directo-reporte',
  templateUrl: './egreso-directo-reporte.component.html',
  styleUrls: ['./egreso-directo-reporte.component.scss']
})
export class EgresoDirectoReporteComponent implements OnInit {

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
    this.solicitudNgrxSvc.DispatchCargarEgresosDirectosReporte(fecha)
  }

  generarPdfIngreso(idIngreso:number){
      window.open(`${Global.url}planilla/egreso/directo/${idIngreso}`, 'Reporte egreso directo')
  }


}
