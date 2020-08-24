import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { SolicitudModel } from '../models/solicitud-i';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SolicitudsService } from '../services/solicituds.service';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ModalesService } from '../services/modales.service';
import { Observable, Subscription } from 'rxjs';
import { AsignacionTasaState } from '../models/models-ngrx';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';

@Component({
  selector: 'app-info-solicitud-model',
  templateUrl: './info-solicitud-model.component.html',
  styleUrls: ['./info-solicitud-model.component.scss']
})
export class InfoSolicitudModelComponent implements OnInit, OnDestroy {

  active:boolean = true;

  public data:SolicitudModel;
  public tipo:number;
  private stateTasa$:Observable<AsignacionTasaState>
  private subscription:Subscription[] = []
  private modalAbierto:boolean = false;
  StateProceso$:Observable<BasicDatas>;

  constructor(
    private dialogRef: MatDialogRef<InfoSolicitudModelComponent>,
    @Inject(MAT_DIALOG_DATA) private dataFuera:{tipoSolicitud:number, solicitud:SolicitudModel},
    private modalesSvc:ModalesService,
    private solicitudNgrx:SolicitudsNgrxService
    ) {
      this.tipo = this.dataFuera.tipoSolicitud;
      this.data = this.dataFuera.solicitud;
    }

  ngOnInit(): void {
    this.stateTasa$ = this.solicitudNgrx.SeleccionarStateAsignarTasa();
    this.StateProceso$ = this.solicitudNgrx.SeleccionarStateProcesoSolicitud();
    this.subscription.push(
      this.StateProceso$.subscribe(res => {
        if(res.success === 1){
          this.cerrarDialog();
        }
      })
    )

    this.subscription.push(
      this.stateTasa$.subscribe(res => {

        if(res.introducirClave && !this.modalAbierto){
          this.modalAbierto = true
          this.modalesSvc.ModalIntroducirClave(1).afterClosed().subscribe(res => {
            if(!res){
              this.modalAbierto = false;
              this.solicitudNgrx.ReiniciarAsignarTasa();
            }
          })
        }
        if((res.success === 1 && !res.clave) || (res.success === 2 && res.clave && res.introducirClave && res.claveCorrecta)){
          setTimeout(()=> this.cerrarDialog(), 300)
        }
      })
    )
  }
  ngOnDestroy(){
    const tipo = this.tipo
      if(tipo === 0){
        this.solicitudNgrx.DispatchSolicitudPorAsignacionTasa()
      }
      if(tipo === 5){
        this.solicitudNgrx.DispatSolicitudPorRevision()
      }
      if(tipo === 1){
        this.solicitudNgrx.DispatchSolicitudesRevisadas()
      }
      if(tipo === 2){
        this.solicitudNgrx.DispatchSolicitudesPorAutorizacion();
      }
      if(tipo === 3){
        this.solicitudNgrx.DispatchSolicitudesPorEjecutado();
      }
      if(tipo === 4){
        this.solicitudNgrx.DispatchSolicitudesRechazadas();
      }
      this.solicitudNgrx.ReiniciarAsignarTasa();

      this.subscription.forEach(element => {
        element.unsubscribe();
      })
      this.solicitudNgrx.ReiniciarStateProcesoSolicitud();

  }


  revisarSolicitud(solicitud:number):void{
    this.solicitudNgrx.CargarRevisarSolicitud(solicitud)
  }

  autorizarSolicitud(solicitud:number):void{
    this.solicitudNgrx.CargarAutorizarSolicitud(solicitud)
  }

  rechazarSolicitud(solicitud:number):void{
    this.solicitudNgrx.CargarRechazarSolicitud(solicitud)
  }


  asignarTasa():void{
    this.modalesSvc.ModalAsignarTasa(this.data.id);
  }

  cerrarDialog(){
    this.active = false;
    setTimeout(()=> this.dialogRef.close(), 300)
  }

}
