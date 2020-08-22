import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { RegisterProjectState } from '../../models/ngrxModelsProjects';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-comision',
  templateUrl: './comision.component.html',
  styles: [
  ]
})
export class ComisionComponent implements OnInit {

  @Input('moneda') moneda:string;
  @Input('id') private id:number
  @Output('cargarNuevamenteDatos') CargarProyecto:EventEmitter<number> = new EventEmitter()
  comision:number[] = [0,1,2,3,4,5,6,7,8,9,10];
  formularioAumentarAprobadoComision: FormGroup;
  AumentoProyectoDesdeElProyectoComision$:Observable<RegisterProjectState>
  subscription:Subscription = new Subscription()

  constructor(private fb:FormBuilder, private sharedSvc:SharedService,private projectSvc:ProjectsService) {
    this.crearFormulario();
   }

  ngOnInit(): void {
    this.AumentoProyectoDesdeElProyectoComision$ = this.projectSvc.SeleccionarAumentarProyectoDesdeComision()
    this.subscription.add(
      this.AumentoProyectoDesdeElProyectoComision$.subscribe(res => {
        if(res.success === 1){
          this.formularioAumentarAprobadoComision.reset()
          this.CargarProyecto.emit(this.id)
        }
      })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  comprobar(valor:number | string | any){
    return this.sharedSvc.formatoNumericoDecimal(valor);
  }


  private crearFormulario():void {
    this.formularioAumentarAprobadoComision = this.fb.group({
      monto:['',[Validators.required]],
      descripcion:['',[Validators.required,Validators.maxLength(190)]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formularioAumentarAprobadoComision,control,pattron);
  }

  restaurarInfo(){
    this.projectSvc.restaurarAumentarAprobadoProyectoDesdeElProyectoComision()
  }

  guardarInformacion(){
    this.projectSvc.AumentarAprobadoProyectoDesdeElProyectoComision(this.id,this.formularioAumentarAprobadoComision.value)
  }

}
