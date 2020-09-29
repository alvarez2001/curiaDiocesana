import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PaginateProjectsState, ProyectoEspecificoState, RegisterProjectState } from '../models/ngrxModelsProjects';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ProjectsService } from '../services/projects.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-egreso-directos',
  templateUrl: './egreso-directos.component.html',
  styleUrls: ['./egreso-directos.component.scss']
})
export class EgresoDirectosComponent implements OnInit {


  seleccioneProyecto:FormGroup;
  proyectosSinPaginar:Observable<PaginateProjectsState>
  proyectoEspecifico:Observable<ProyectoEspecificoState>
  proyectoAprobado$:Observable<RegisterProjectState>
  private subscription:Subscription = new Subscription()


  constructor(private fb:FormBuilder,private sharedSvc:SharedService,private projectSvc:ProjectsService) {
    this.crearFormulario();

  }

  ngOnInit(): void {
    this.proyectoAprobado$ = this.projectSvc.SeleccionarModificarAprobadoProyecto()
    this.proyectosSinPaginar = this.projectSvc.SelectProjectsAll()
    this.proyectoEspecifico = this.projectSvc.SeleccionaProyectoEspecifico();
    this.cargarProyectos();

    this.subscription.add(
      this.seleccioneProyecto.get('proyecto').valueChanges
      .pipe(
        distinctUntilChanged((x, y) => {
          if(x !== y ){

            this.projectSvc.RestaurarProyectoAprobado()
            return false
          }
          return true
        })
      )
      .subscribe(res => {
        this.buscarUnProyecto(res)
      })
    );
  }

  ngOnDestroy(){
    this.restaurarInfo();
    this.subscription.unsubscribe();
  }

  cargarProyectos(){
    this.projectSvc.loadProjectsAllSinPaginar()
  }
  restaurarInfo(){
    this.projectSvc.RestaurarProyectoAprobado()
  }

  buscarUnProyecto(idProyecto:string):void{
    const id = this.pasarEntero(idProyecto);
    this.projectSvc.cargarProyectoEspecifico(id,false)
  }

  pasarEntero(id:string):number{
    return parseInt(id);
  }

  private crearFormulario() {
    this.seleccioneProyecto = this.fb.group({
      proyecto:['',[Validators.required]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.seleccioneProyecto,control,pattron);
  }
}
