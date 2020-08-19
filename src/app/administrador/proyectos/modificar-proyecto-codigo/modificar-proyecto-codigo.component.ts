import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Observable, Subscription } from 'rxjs';
import { ProyectoEspecificoState, RegisterProjectState } from '../models/ngrxModelsProjects';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-modificar-proyecto-codigo',
  templateUrl: './modificar-proyecto-codigo.component.html',
  styles: [
  ]
})
export class ModificarProyectoCodigoComponent implements OnInit,OnDestroy {

  public id:number;
  proyectoEspecifico$:Observable<ProyectoEspecificoState>;
  private subscription:Subscription = new Subscription()
  private comprobarQueNoRepita:boolean = false;
  modificarCodigoProyecto$:Observable<RegisterProjectState>;
  private idProyecto:number;

  formModificar:FormGroup;

  constructor(private router:ActivatedRoute,private ProjectsSvc:ProjectsService,private fb:FormBuilder,private sharedSvc:SharedService) {
    this.cargarFormulario();
  }




  ngOnInit(): void {
    this.modificarCodigoProyecto$ = this.ProjectsSvc.SeleccionarModificarCodigoProyecto();
    this.proyectoEspecifico$ = this.ProjectsSvc.SeleccionaProyectoEspecifico();



    this.subscription.add(
      this.proyectoEspecifico$.subscribe(res => {
        if(!this.comprobarQueNoRepita && res.Proyecto?.id ){
          this.formModificar.get('codigo').setValue(res?.Proyecto?.codigo);
          this.idProyecto = res.Proyecto.id;
          this.comprobarQueNoRepita = true;
        }
      })
    )

    this.id = parseInt(this.router.snapshot.params?.id)
    this.cargarInfo(this.id)
  }

  ngOnDestroy(){
    this.ReiniciarDatos()
    this.subscription.unsubscribe();
  }

  ReiniciarDatos(){
    this.ProjectsSvc.RestaurarStateModificarProyectoCodigo();
  }

  modificarProyecto(){
    this.ProjectsSvc.ModificarProyectoCodigo(this.idProyecto,this.formModificar.value)
  }


  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formModificar,control,pattron);
  }

  cargarInfo(id:number){
    this.ProjectsSvc.cargarProyectoEspecifico(id, false)
  }

  private cargarFormulario(){
    this.formModificar = this.fb.group({
      codigo:['',[Validators.minLength(3), Validators.maxLength(50),Validators.required]]
    })
  }
}
