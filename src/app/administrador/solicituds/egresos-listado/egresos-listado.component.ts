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
  selector: 'app-egresos-listado',
  templateUrl: './egresos-listado.component.html',
  styleUrls: ['./egresos-listado.component.scss']
})
export class EgresosListadoComponent implements OnInit {

  @ViewChild('fecha') fecha:ElementRef
  DatosReporteDia$:Observable<DatosReportesDiaState>

  stateInfoEgreso$:Observable<BasicDatas>;
  stateAnularEgreso$:Observable<BasicDatas>;

  constructor(private solicitudNgrxSvc:SolicitudsNgrxService, private dialog: MatDialog, private modalesSvc:ModalesService, private solicitudsSvc:SolicitudsService) { }

  ngOnInit(): void {
    this.DatosReporteDia$ = this.solicitudNgrxSvc.SeleccionarStateReportesPorDia()
    this.stateInfoEgreso$ = this.solicitudNgrxSvc.SeleccionarStateInfoEgresoDetallado();
    this.stateAnularEgreso$ = this.solicitudNgrxSvc.SeleccionarStateAnularEgreso();
    this.stateAnularEgreso$.subscribe(res => {
      if(res.success === 1){
        this.consultar(this.fecha.nativeElement.value)
      }
    })
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
        this.solicitudNgrxSvc.DispatchCargarReportesPorDia(res)
      }
    })
  }

  ngOnDestroy(){
    this.solicitudNgrxSvc.ReiniciarReportePorDia()
  }

  consultar(fecha:string){
    this.solicitudNgrxSvc.DispatchCargarReportesPorDia(fecha)
  }

  generarPdfDia(){
    const dato = this.fecha.nativeElement.value
    if(dato !== ''){
      window.open(`${Global.url}reporte/egresos/dia/${dato}`, 'Reportes de egresos')
    }
  }

  generarModalPdf(){
    this.dialog.open(ReporteEgresosMensualesModalComponent,{
      disableClose:true
    })
  }

  abrirDetalleSolicitud(id:number){
    this.solicitudsSvc.mostrarInfoSolicitudPdf(id)
  }

  abrirDetalleEgreso(data:number){
    this.solicitudNgrxSvc.DispatchCargarInfoEgresoDetallado(data);
  }

}
