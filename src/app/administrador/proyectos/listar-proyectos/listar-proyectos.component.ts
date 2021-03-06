import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { PaginateProjectsState, ProyectoEspecificoState } from '../models/ngrxModelsProjects';
import { ProjectModelComplete } from "../models/project.models";
import { Global } from 'src/app/services/Global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  providers:[ProjectsService]
})
export class ListarProyectosComponent implements OnInit {

  ProjectsPaginate$:Observable<PaginateProjectsState>
  ModalProyecto$:Observable<ProyectoEspecificoState>;
  formBusqueda:FormGroup;
  constructor(private ProjectsSvc:ProjectsService, private fb:FormBuilder) {
    this.formBusqueda = this.fb.group({
      busqueda:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.cargarProyectos();
    this.ModalProyecto$ = this.ProjectsSvc.SeleccionaProyectoEspecifico();
    this.ProjectsPaginate$ = this.ProjectsSvc.SelectProjectsAll()
  }
  buscarPagina(value:number,pagina:string){
    return this.paginate(pagina,value)
  }

  paginate(page:string, pageNumber:number){
    this.ProjectsSvc.loadProjectsAllPaginatePage(`${page}?page=${pageNumber}`)
  }

  cargarProyectos():void{
    this.ProjectsSvc.loadProjectsAllPaginados();
  }
  selectPage(lastPage:number):number[]{

    const data:number[] = [];

    for(let i = 1; i <= lastPage; i++){
      data.push(i)
    };
    return data;
  }

  mostrarInfo(data:ProjectModelComplete){
    this.ProjectsSvc.cargarProyectoEspecifico(data.id)
  }

  ReporteProyectos(id:number){
    window.open(`${Global.url}reporte/proyecto/${id}`, `Reporte del proyecto ${id}`)
  }

  busquedaDeProyecto(){
    this.ProjectsSvc.cargarProyectosXnombre(this.formBusqueda.value.busqueda)
  }

  AuditoriaProyecto(id:number){
    window.open(`${Global.url}auditoria/interna/proyecto/${id}`, `Auditoria del proyecto ${id}`)
  }
}
