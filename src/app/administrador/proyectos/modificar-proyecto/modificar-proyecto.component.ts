import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoMonedaConst, statusProject, ProjectModelComplete, ModelModificarDatosInformacion } from "../models/project.models";
import { ProjectsService } from '../services/projects.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProyectoEspecificoState, RegisterProjectState } from '../models/ngrxModelsProjects';
@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  providers:[SharedService]
})
export class ModificarProyectoComponent implements OnInit, OnDestroy {
  moneda:string[] = tipoMonedaConst;
  statusProject:{value:number,status:string}[] = statusProject
  formModificar:FormGroup;
  id:number;
  private idProyecto:number;
  proyectoEspecifico$:Observable<ProyectoEspecificoState>;
  private subscription:Subscription = new Subscription()
  private comprobarQueNoRepita:boolean = false;

  modificarInfoProyecto$:Observable<RegisterProjectState>;

  constructor(private fb:FormBuilder,private ProjectsSvc:ProjectsService,private sharedSvc:SharedService,private router:ActivatedRoute) {
    this.cargarFormulario();
  }

  ngOnInit(): void {
    this.proyectoEspecifico$ = this.ProjectsSvc.SeleccionaProyectoEspecifico();
    this.modificarInfoProyecto$ = this.ProjectsSvc.SeleccionarModificarInfoProyecto();
    this.subscription.add(
      this.proyectoEspecifico$.subscribe(res => {
        if(!this.comprobarQueNoRepita && res.Proyecto?.id ){
          this.formModificar.get('nombre').setValue(res.Proyecto.nombre);
          this.formModificar.get('status').setValue(res.Proyecto.status);
          this.formModificar.get('moneda').setValue(res.Proyecto.moneda);
          this.formModificar.get('alias').setValue(res.Proyecto?.alias);
          this.idProyecto = res.Proyecto.id;
          this.comprobarQueNoRepita = true;
        }
      })
    )
    this.id = parseInt(this.router.snapshot.params?.id)
    this.cargarInfo(this.id)
  }

  ngOnDestroy(){
    this.restartData()
    this.subscription.unsubscribe()
  }
  restartData():void{
    this.ProjectsSvc.RestaurarStateModificarProyectoInfo()
  }

  private cargarFormulario(){
    this.formModificar = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(4),Validators.maxLength(150)]],
      status:['',[Validators.required]],
      moneda:['Euro',[Validators.required]],
      alias:['',[Validators.maxLength(40)]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formModificar,control,pattron);
  }

  cargarInfo(id:number){
    this.ProjectsSvc.cargarProyectoEspecifico(id, false)
  }

  modificarProyecto(){
    const form:ModelModificarDatosInformacion = Object.assign({},this.formModificar.value);
    if(form.alias === ''){
      delete form.alias
    }
    this.ProjectsSvc.ModificarProyectoInfo(this.idProyecto,form)
  }


}
