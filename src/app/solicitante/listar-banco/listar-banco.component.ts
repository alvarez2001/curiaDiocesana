import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BancosState, RegisterProjectState } from 'src/app/administrador/proyectos/models/ngrxModelsProjects';
import { NgrxServicesService } from '../services/ngrx-services.service';
import { MatDialog } from '@angular/material/dialog';
import { bancosModel } from 'src/app/administrador/proyectos/models/project.models';
import { InfoBancoComponent } from '../info-banco/info-banco.component';


@Component({
  selector: 'app-listar-banco',
  templateUrl: './listar-banco.component.html',
  styleUrls: ['./listar-banco.component.scss']
})
export class ListarBancoComponent implements OnInit {


  todosLosBancos$:Observable<BancosState>
  eliminarStateBancos$:Observable<RegisterProjectState>
  private subscription:Subscription = new Subscription()

  constructor(private solicitanteNgrxSvc:NgrxServicesService,private dialog: MatDialog) { }


  ngOnInit(): void {
    this.todosLosBancos$ = this.solicitanteNgrxSvc.SeleccionarTodosLosBancos()
    this.eliminarStateBancos$ = this.solicitanteNgrxSvc.SeleccionarEliminarRegistrarBanco()
    this.buscarInfo();
    this.subscription.add(
      this.eliminarStateBancos$.subscribe(res => {
        if(res.success === 1){
          this.buscarInfo();
        }
      })
    )
  }
  ngOnDestroy(){
    this.restaurarData();
    this.subscription.unsubscribe();
  }

  restaurarData():void{
    this.solicitanteNgrxSvc.ReiniciarRegistroEliminarBanco()
  }

  buscarInfo():void{
    this.solicitanteNgrxSvc.CargarTodosLosBancos()
  }
  mostrarInfoBanco(banco:bancosModel){
    this.mostrarModalBanco(banco);
  }

  mostrarModalBanco(data:bancosModel){
    return this.dialog.open(InfoBancoComponent, {
      width: '1000px',
      data:data,
      disableClose:true
    });
  }


}
