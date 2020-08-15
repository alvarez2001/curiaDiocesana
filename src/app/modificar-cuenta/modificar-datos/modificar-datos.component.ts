import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogRegService } from 'src/app/services/login/log-reg.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/administrador/usuarios/models/usersInactive.models';
import { SharedService } from 'src/app/services/shared/shared.service';
import { StoresSharedModificarCuentaModuleService } from "../services/stores-shared-modificar-cuenta-module.service";
import { StateModificarData, StateGetUserActive } from '../models/stateModificarData.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  providers:[LogRegService,SharedService]
})
export class ModificarDatosComponent implements OnInit, OnDestroy {

  private subscription:Subscription = new Subscription();
  formCambiar:FormGroup;
  ModifiedDataStore$:Observable<StateModificarData>;
  detailUser$:Observable<StateGetUserActive>;


  constructor(private fb:FormBuilder,private sharedSvc:SharedService, private distpachModificarDatosSvc:StoresSharedModificarCuentaModuleService) { }

  ngOnInit(): void {
    this.construirForm()
    this.cargarInfo();
    this.ModifiedDataStore$ = this.distpachModificarDatosSvc.getModifiedData();
  }

  ngOnDestroy(){
    this.distpachModificarDatosSvc.ResetModificarCuenta();
    this.subscription.unsubscribe();
  }

  cargarInfo(){
    this.distpachModificarDatosSvc.DistpathGetDetailUser();
    this.detailUser$ = this.distpachModificarDatosSvc.getDetailUser();
    this.subscription.add(
      this.detailUser$.subscribe(res => {

        if(res?.successData){
          this.AnadirData(res.successData)
        }
      })
    )
  }


  AnadirData(data:UserModel){
    this.formCambiar.get('nombres').setValue(data.nombres)
    this.formCambiar.get('apellidos').setValue(data.apellidos)
    this.formCambiar.get('email').setValue(data.email)
  }


  construirForm(){
    const patronEmail = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}';
    this.formCambiar =  this.fb.group({
      nombres:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      apellidos:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      email:['',[Validators.required,Validators.pattern(patronEmail)]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formCambiar,control,pattron);
  }


  guardarDatos(){
    this.distpachModificarDatosSvc.DistpatchModificarCuenta(this.formCambiar.value)
  }
}
