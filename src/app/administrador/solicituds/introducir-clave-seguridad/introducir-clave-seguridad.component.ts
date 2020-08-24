import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';
import { AsignacionTasaState } from '../models/models-ngrx';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-introducir-clave-seguridad',
  templateUrl: './introducir-clave-seguridad.component.html',
  styleUrls: ['./introducir-clave-seguridad.component.scss']
})
export class IntroducirClaveSeguridadComponent implements OnInit {
  active:boolean = true;
  claveForm:FormGroup;

  private subscription:Subscription = new Subscription()
  private stateTasa$:Observable<AsignacionTasaState>
  private tasa:number;
  private solicitudID:number;

  constructor(
    private dialogRef: MatDialogRef<IntroducirClaveSeguridadComponent>,
    @Inject(MAT_DIALOG_DATA) private data:number,
    private fb:FormBuilder,
    private solicitudNgrxSvc:SolicitudsNgrxService,
    private sharedSvc:SharedService
  ) { }

  ngOnInit(): void {
    this.stateTasa$ = this.solicitudNgrxSvc.SeleccionarStateAsignarTasa();
    this.subscription.add(
      this.stateTasa$.subscribe(res => {

        if(res.success ===1){
          this.cerrarDialog(false);
        }

        if(res.tasa){
          this.tasa = res.tasa.tasa
        }
        if(res.solicitud){
          this.solicitudID = res.solicitud
        }


      })
    )
    this.claveForm = this.fb.group({
      clave:['',[Validators.required]]
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  cerrarDialog(dato = true){
    this.active = false;
    setTimeout(()=> this.dialogRef.close(dato), 300)
  }



  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.claveForm,control,pattron);
  }

  asignar():void{

    const datos = {
      codigo:this.claveForm.get('clave').value,
      tasa:this.tasa
    }

    const id = this.solicitudID

    this.solicitudNgrxSvc.CargarAsignarTasa(id,datos)
  }

}
