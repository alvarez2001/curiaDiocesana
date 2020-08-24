import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AsignacionTasaState } from '../models/models-ngrx';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';

@Component({
  selector: 'app-asignar-tasa-modal',
  templateUrl: './asignar-tasa-modal.component.html',
  styles: [
  ]
})
export class AsignarTasaModalComponent implements OnInit, OnDestroy {

  active:boolean = true;
  asignarTasa:FormGroup;

  private subscription:Subscription = new Subscription()
  private stateTasa$:Observable<AsignacionTasaState>

  constructor(
    private dialogRef: MatDialogRef<AsignarTasaModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data:number,
    private sharedSvc:SharedService,
    private fb:FormBuilder,
    private solicitudNgrxSvc:SolicitudsNgrxService
  ) { }

  ngOnInit(): void {
    this.stateTasa$ = this.solicitudNgrxSvc.SeleccionarStateAsignarTasa();
    this.subscription.add(
      this.stateTasa$.subscribe(res => {
        if(res.clave || res.success === 1){
          this.cerrarDialog();

        }
      })
    )
    this.asignarTasa = this.fb.group({
      tasa:['',[Validators.required,Validators.maxLength(11)]]
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  cerrarDialog(){
    this.active = false;
    setTimeout(()=> this.dialogRef.close(), 300)
  }

  comprobar(valor){
    return this.sharedSvc.formatoNumericoDecimal(valor);
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.asignarTasa,control,pattron);
  }

  asignar():void{
    this.solicitudNgrxSvc.CargarAsignarTasa(this.data,this.asignarTasa.value)
  }

}
