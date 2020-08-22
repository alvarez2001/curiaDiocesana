import { Component, OnInit, Input, OnChanges, Output, EventEmitter  } from '@angular/core';
import { ProyectoEspecificoState } from '../models/ngrxModelsProjects';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styles: [
  ]
})
export class DetalleProyectoComponent implements OnInit {

  @Input('idProyecto') private id:number;
  @Input('proyecto') proyecto:ProyectoEspecificoState
  @Output('recargarProyectoEspecifico') private recargarProyecto:EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {


  }


  recargarProyectoComponent():void{
    this.recargarProyecto.emit(this.id)
  }
}
