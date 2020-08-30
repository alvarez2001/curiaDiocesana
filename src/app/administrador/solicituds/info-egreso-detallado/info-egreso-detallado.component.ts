import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { EgresosIngresosModel } from '../models/solicitud-i';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { Observable } from 'rxjs';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-info-egreso-detallado',
  templateUrl: './info-egreso-detallado.component.html',
  styles: [
  ]
})
export class InfoEgresoDetalladoComponent implements OnInit, OnDestroy {

  active:boolean = true;
  stateAnularEgreso:Observable<BasicDatas>;
  private url:string;

  constructor(
    private dialogRef: MatDialogRef<InfoEgresoDetalladoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:EgresosIngresosModel,
    private solicitudNgrxSvc:SolicitudsNgrxService
  ) {
    this.url = Global.url
   }

  ngOnInit(): void {
    this.stateAnularEgreso = this.solicitudNgrxSvc.SeleccionarStateAnularEgreso();
    this.stateAnularEgreso.subscribe(res => {
      if(res.success === 1){
        this.cerrarDialog();
      }
    })
  }

  ngOnDestroy(){
    this.solicitudNgrxSvc.DispatchReiniciarAnularEgreso();
  }

  cerrarDialog(valor=false){
    this.active = false;
    setTimeout(()=> this.dialogRef.close(valor), 300)
  }

  cuandoFueCreado(data:Date):string{
    return moment(data).locale('es').fromNow()
  }

  comprobarStatus(status:string):string{
    return (parseInt(status) === 1) ? 'Ejecutada': 'Anulada'
  }

  anularEgreso(id:number){
    const anular = confirm(`Desea anular el egreso #${id}`);

    if(anular){
      this.solicitudNgrxSvc.DispatchCargarAnularEgreso(id)
    }
  }
  descargarPdfEgreso(idEgreso){
    window.open(`${this.url}planilla/egreso/${idEgreso}`, 'Detalle del egreso')
  }

  devolverValor(data:string):number{
    return parseInt(data)
  }

}
