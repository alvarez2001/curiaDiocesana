import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bancosModel } from '../models/project.models';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { RegisterProjectState } from '../models/ngrxModelsProjects';
import { ProjectsService } from '../services/projects.service';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-info-banco',
  templateUrl: './info-banco.component.html',
  styles: [
  ]
})
export class InfoBancoComponent implements OnInit, OnDestroy {

  active:boolean = true
  eliminarStateBancos$:Observable<RegisterProjectState>
  private subscription:Subscription = new Subscription()
  constructor(private projectSvc:ProjectsService,public dialogRef: MatDialogRef<InfoBancoComponent>,@Inject(MAT_DIALOG_DATA) public data:bancosModel, private LogRegSvc:LogRegService) { }

  ngOnInit(): void {
    this.projectSvc.ReiniciarRegistroEliminarBanco()
    this.eliminarStateBancos$ = this.projectSvc.SeleccionarEliminarRegistrarBanco()
    this.subscription.add(
      this.eliminarStateBancos$.subscribe(res => {
        if(res.success === 1){
          this.cerrarDialog();
        }
      })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  cerrarDialog(){
    this.active = false;
    this.dialogRef.close()
  }

  eliminarBanco(){
    const confirm = window.confirm('Estas seguro que desea eliminar este banco?')
    if(confirm){
      this.projectSvc.cargarEliminarBanco(this.data.id)
    }

  }

  ValidarPermiso(permisos:string[]):boolean{
    return this.LogRegSvc.VerificarPermiso(permisos)
  }
}
