import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { PaginateProjectsState } from '../models/ngrxModelsProjects';
import { ProjectModelComplete } from "../models/project.models";


@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  providers:[ProjectsService]
})
export class ListarProyectosComponent implements OnInit {

  ProjectsPaginate$:Observable<PaginateProjectsState>
  constructor(private ProjectsSvc:ProjectsService) { }

  ngOnInit(): void {
    this.cargarProyectos();
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
}
