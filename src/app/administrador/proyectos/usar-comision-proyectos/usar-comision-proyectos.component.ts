import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ProjectsService } from '../services/projects.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { PaginateProjectsState, ProyectoEspecificoState, RegisterProjectState } from '../models/ngrxModelsProjects';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-usar-comision-proyectos',
  templateUrl: './usar-comision-proyectos.component.html',
  providers:[SharedService, ProjectsService]
})
export class UsarComisionProyectosComponent implements OnInit, OnDestroy {


  seleccioneProyecto:FormGroup;
  proyectosSinPaginar:Observable<PaginateProjectsState>
  proyectoEspecifico:Observable<ProyectoEspecificoState>
  AumentoProyectoDesdeElProyectoComision$:Observable<RegisterProjectState>
  private subscription:Subscription = new Subscription()


  constructor(private fb:FormBuilder,private sharedSvc:SharedService,private projectSvc:ProjectsService) {
    this.crearFormulario();

  }

  ngOnInit(): void {
    this.AumentoProyectoDesdeElProyectoComision$ = this.projectSvc.SeleccionarAumentarProyectoDesdeComision()
    this.proyectosSinPaginar = this.projectSvc.SelectProjectsAll()
    this.proyectoEspecifico = this.projectSvc.SeleccionaProyectoEspecifico();
    this.cargarProyectos();

    this.subscription.add(
      this.seleccioneProyecto.get('proyecto').valueChanges
      .pipe(
        distinctUntilChanged((x, y) => {
          if(x !== y ){

            this.projectSvc.restaurarAumentarAprobadoProyectoDesdeElProyectoComision()
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
    this.subscription.unsubscribe();
    this.restaurarInfo()
  }

  cargarProyectos(){
    this.projectSvc.loadProjectsAllSinPaginar()
  }
  restaurarInfo(){
    this.projectSvc.restaurarAumentarAprobadoProyectoDesdeElProyectoComision()
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

