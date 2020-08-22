import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Observable, Subscription } from 'rxjs';
import { RegisterProjectState } from '../../models/ngrxModelsProjects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-aprobado',
  templateUrl: './aprobado.component.html',
  styles: [
  ]
})
export class AprobadoComponent implements OnInit, OnDestroy {

  @Input('moneda') moneda:string;
  @Input('id') private id:number
  @Output('cargarNuevamenteDatos') CargarProyecto:EventEmitter<number> = new EventEmitter()
  comision:number[] = [0,1,2,3,4,5,6,7,8,9,10];
  formularioAprobado: FormGroup;
  proyectoAprobado$:Observable<RegisterProjectState>
  subscription:Subscription = new Subscription()

  constructor(private fb:FormBuilder, private sharedSvc:SharedService,private projectSvc:ProjectsService) {
    this.crearFormulario();
   }

  ngOnInit(): void {
    this.proyectoAprobado$ = this.projectSvc.SeleccionarModificarAprobadoProyecto()
    this.subscription.add(
      this.proyectoAprobado$.subscribe(res => {
        if(res.success === 1){
          this.formularioAprobado.reset()
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
    this.formularioAprobado = this.fb.group({
      aprobado:['',[Validators.required]],
      comision:['',[Validators.required]],
      descripcion:['',[Validators.required,Validators.maxLength(190)]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formularioAprobado,control,pattron);
  }

  restaurarInfo(){
    this.projectSvc.RestaurarProyectoAprobado()
  }

  guardarInformacion(){
    this.projectSvc.ModificarProyectoAprobado(this.id,this.formularioAprobado.value)
  }

}
