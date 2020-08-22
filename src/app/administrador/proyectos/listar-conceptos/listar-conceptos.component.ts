import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable, Subscription } from 'rxjs';
import { ConceptosState, RegisterProjectState } from "../models/ngrxModelsProjects";

@Component({
  selector: 'app-listar-conceptos',
  templateUrl: './listar-conceptos.component.html',
  styles: [
  ]
})
export class ListarConceptosComponent implements OnInit, OnDestroy {


  public ListarConceptos$:Observable<ConceptosState>
  public EliminarConcepto$:Observable<RegisterProjectState>
  private subscription : Subscription = new Subscription()

  constructor(private projectSvc:ProjectsService) { }
  ngOnInit(): void {
    this.cargarInfo();
    this.ListarConceptos$ = this.projectSvc.SeleccionarTodosLosConceptos();
    this.EliminarConcepto$ = this.projectSvc.SeleccionarConceptoEliminarRegistrar()
    this.subscription.add(
      this.EliminarConcepto$.subscribe(res => {
        if(res.success === 1){
          this.cargarInfo()
        }
      })
    )
  }
  ngOnDestroy(){
    this.restaurarStateConcepto();
    this.subscription.unsubscribe()
  }

  cargarInfo(){
    this.projectSvc.BuscarTodosLosConceptos()
  }

  eliminarConcepto(id:number):void{
    this.projectSvc.cargarEliminarConcepto(id)
  }
  restaurarStateConcepto():void{
    this.projectSvc.reiniciarRegistroConcepto()
  }
}
