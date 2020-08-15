import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Store,select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { loadRegisterAdmin } from "../statesNgrx";
import { InitialDataRegisterAdmin } from '../models/usersAdmin.models';
import { getDataRegisterState } from "../statesNgrx/featureUserAdminSelector";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  providers:[SharedService]
})
export class CrearUsuarioComponent implements OnInit, OnDestroy {

  pantallaCarga$:Observable<boolean>;
  registerProcess:Observable<InitialDataRegisterAdmin>;
  formRegister:FormGroup;


  constructor(private fb:FormBuilder,private sharedSvc:SharedService,private store:Store<{pantallaCarga:boolean}>) {
    this.pantallaCarga$ = this.store.pipe(select('pantallaCarga'));
    this.registerProcess = this.store.select(getDataRegisterState)
   }

   ngOnDestroy(){

   }

  ngOnInit(): void {
    const patronEmail = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}';

    this.formRegister = this.fb.group({
      nombres:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      apellidos:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      nacionalidad:['',[Validators.required,Validators.minLength(1),Validators.maxLength(1)]],
      cedula:['',[Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(7),Validators.maxLength(12)]],
      usuario:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      password:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(patronEmail)]]
    });

    this.registerProcess.subscribe(res => {
      if(res.loading){
        this.sharedSvc.disabled(this.formRegister)
      }else{
        this.sharedSvc.enabled(this.formRegister)
      }

      if(res.successData !== ''){
        this.formRegister.reset()
      }
    })
  }



  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formRegister,control,pattron);
  }

  registerAdmin(){
    this.store.dispatch(loadRegisterAdmin({dataAdmin:this.formRegister.value}))
  }

}
