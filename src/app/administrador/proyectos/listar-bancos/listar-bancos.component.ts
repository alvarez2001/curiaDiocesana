import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { BancosState, RegisterProjectState } from '../models/ngrxModelsProjects';
import { Observable, Subscription } from 'rxjs';
import { bancosModel } from '../models/project.models';

@Component({
  selector: 'app-listar-bancos',
  templateUrl: './listar-bancos.component.html',
  styles: [
  ]
})
export class ListarBancosComponent implements OnInit, OnDestroy {


  todosLosBancos$:Observable<BancosState>
  eliminarStateBancos$:Observable<RegisterProjectState>
  private subscription:Subscription = new Subscription()

  constructor(private projectSvc:ProjectsService) { }


  ngOnInit(): void {
    this.todosLosBancos$ = this.projectSvc.SeleccionarTodosLosBancos()
    this.eliminarStateBancos$ = this.projectSvc.SeleccionarEliminarRegistrarBanco()
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
    this.projectSvc.ReiniciarRegistroEliminarBanco()
  }

  buscarInfo():void{
    this.projectSvc.CargarTodosLosBancos()
  }
  mostrarInfoBanco(banco:bancosModel){
    this.projectSvc.mostrarModalBanco(banco);
  }


}
