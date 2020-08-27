import { Component, OnInit, Inject } from '@angular/core';
import { NgrxServicesService } from '../services/ngrx-services.service';
import { RegisterProjectState } from 'src/app/administrador/proyectos/models/ngrxModelsProjects';
import { Observable, Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { bancosModel } from 'src/app/administrador/proyectos/models/project.models';

@Component({
  selector: 'app-info-banco',
  templateUrl: './info-banco.component.html',
  styleUrls: ['./info-banco.component.scss']
})
export class InfoBancoComponent implements OnInit {


  active:boolean = true
  eliminarStateBancos$:Observable<RegisterProjectState>
  private subscription:Subscription = new Subscription()
  constructor(private solicitanteNgrxSvc:NgrxServicesService,public dialogRef: MatDialogRef<InfoBancoComponent>,@Inject(MAT_DIALOG_DATA) public data:bancosModel) { }

  ngOnInit(): void {
    this.solicitanteNgrxSvc.ReiniciarRegistroEliminarBanco()
    this.eliminarStateBancos$ = this.solicitanteNgrxSvc.SeleccionarEliminarRegistrarBanco()
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
      this.solicitanteNgrxSvc.cargarEliminarBanco(this.data.id)
    }

  }
}
