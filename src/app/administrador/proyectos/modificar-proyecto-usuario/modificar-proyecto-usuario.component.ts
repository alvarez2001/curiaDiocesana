import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProyectoEspecificoState, RegisterProjectState } from '../models/ngrxModelsProjects';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AdminsStateModel } from '../../usuarios/models/usersInactive.models';

@Component({
  selector: 'app-modificar-proyecto-usuario',
  templateUrl: './modificar-proyecto-usuario.component.html',
  styles: [
  ]
})
export class ModificarProyectoUsuarioComponent implements OnInit {

  public id:number;
  private subscription:Subscription = new Subscription()
  private comprobarQueNoRepita:boolean = false;
  private idProyecto:number;
  formModificar:FormGroup;

  proyectoEspecifico$:Observable<ProyectoEspecificoState>;
  modificarUsuarioProyecto$:Observable<RegisterProjectState>;
  dataUsersListSolicitante$:Observable<AdminsStateModel>;

  constructor(private router:ActivatedRoute,private ProjectsSvc:ProjectsService,private fb:FormBuilder,private sharedSvc:SharedService) {
    this.cargarFormulario();
  }




  ngOnInit(): void {
    this.modificarUsuarioProyecto$ = this.ProjectsSvc.SeleccionarModificarUsuarioProyecto();
    this.proyectoEspecifico$ = this.ProjectsSvc.SeleccionaProyectoEspecifico();
    this.dataUsersListSolicitante$ = this.ProjectsSvc.SelectUsersSolicitantesState();


    this.subscription.add(
      this.proyectoEspecifico$.subscribe(res => {
        if(!this.comprobarQueNoRepita && res.Proyecto?.id ){
          this.formModificar.get('usuario').setValue(res?.Proyecto?.usuario_id);
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

  getListUsersSolicitantes(){
    this.ProjectsSvc.loadUsersSolicitante()
  }

  ReiniciarDatos(){
    this.ProjectsSvc.RestaurarStateModificarProyectoUsuario();
  }

  modificarProyecto(){
    this.ProjectsSvc.ModificarProyectoUsuario(this.idProyecto,this.formModificar.value)
  }


  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formModificar,control,pattron);
  }

  cargarInfo(id:number){
    this.ProjectsSvc.cargarProyectoEspecifico(id, false)
  }

  private cargarFormulario(){
    this.formModificar = this.fb.group({
      usuario:['',[Validators.required]]
    })
  }
}
