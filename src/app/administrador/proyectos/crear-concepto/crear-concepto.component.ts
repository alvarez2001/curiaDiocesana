import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ProjectsService } from '../services/projects.service';
import { RegisterProjectState } from "../models/ngrxModelsProjects";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-concepto',
  templateUrl: './crear-concepto.component.html',
  providers:[SharedService]
})
export class CrearConceptoComponent implements OnInit, OnDestroy {

  registrarConcepto:FormGroup
  conceptoState$:Observable<RegisterProjectState>
  constructor(
    private fb:FormBuilder,
    private sharedSvc:SharedService,
    private projectSvc:ProjectsService
    ){
      this.registrarFormulario()
     }

  ngOnInit(): void {
    this.conceptoState$ = this.projectSvc.SeleccionarConceptoEliminarRegistrar();
  }

  ngOnDestroy(){
    this.reiniciarState()
  }

  reiniciarState(){
    this.projectSvc.reiniciarRegistroConcepto()
  }


  guardarConcepto(){
    this.projectSvc.cargarRegistroConcepto(this.registrarConcepto.value)
  }
  private registrarFormulario(){
    this.registrarConcepto = this.fb.group({
      descripcion:['',[Validators.required, Validators.maxLength(190)]],
      solicitud:['',[Validators.required]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.registrarConcepto,control,pattron);
  }

}
