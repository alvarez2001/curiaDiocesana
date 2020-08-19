import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ProjectsService } from "../services/projects.service";
import { RegisterProjectState } from "../models/ngrxModelsProjects";
import { tipoMonedaConst, ProjectModel, statusProject } from "../models/project.models";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Observable, Subscription } from 'rxjs';
import { AdminsStateModel } from '../../usuarios/models/usersInactive.models';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss'],
  providers:[ProjectsService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CrearProyectoComponent implements OnInit, OnDestroy {

  comision:number[] = [0,1,2,3,4,5,6,7,8,9,10];
  moneda:string[] = tipoMonedaConst;
  statusProject:{value:number,status:string}[] = statusProject
  formRegister:FormGroup;
  dataRegister$:Observable<RegisterProjectState>;
  dataUsersListSolicitante$:Observable<AdminsStateModel>;

  subscription : Subscription = new Subscription();

  constructor(private projectsSvc:ProjectsService,private fb:FormBuilder, private sharedSvc:SharedService) {
    this.crearFormulario();

  }

  ngOnInit(): void {
    this.getListUsersSolicitantes()
    this.dataUsersListSolicitante$ = this.projectsSvc.SelectUsersSolicitantesState();
    this.dataRegister$ = this.projectsSvc.selectRegisterProjectState()



    this.subscription.add(
      this.dataRegister$.subscribe(res => {
        if(res.success === 1){
          this.formRegister.reset()
        }
      })
    )
  }
  getListUsersSolicitantes(){
    this.projectsSvc.loadUsersSolicitante()
  }

  comprobar(valor){
    return this.sharedSvc.formatoNumericoDecimal(valor);
  }

  crearFormulario(){
    this.formRegister = this.fb.group({
      codigo:['',[Validators.minLength(3), Validators.maxLength(50),Validators.required]],
      nombre:['',[Validators.required,Validators.minLength(4),Validators.maxLength(150)]],
      aprobado:['',[Validators.required]],
      comision:['',[Validators.required]],
      status:['',[Validators.required]],
      moneda:['Euro',[Validators.required]],
      alias:['',[Validators.maxLength(40)]],
      usuario:[null]
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.RestoreState();
  }

  RestoreState(){
    this.projectsSvc.RestoreStateRegisterProject()
  }

  registrarProyecto(){
    const data:ProjectModel =
    Object.assign({},this.formRegister.value, {
      status:parseInt(this.formRegister.value.status),
      comision:parseInt(this.formRegister.value.comision),
      aprobado:parseFloat(this.formRegister.value.aprobado)
    });
    const DataNueva = this.eliminarCamposOpcionales(data)
    this.projectsSvc.loadStateRegisterProject(DataNueva)
  }

  private eliminarCamposOpcionales(data:ProjectModel){
    const dataNueva:ProjectModel = data
    if(dataNueva.alias === '') {
      delete dataNueva.alias
    }
    if(dataNueva.usuario === null){
      delete dataNueva.usuario
    }

    return dataNueva
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formRegister,control,pattron);
  }

}
