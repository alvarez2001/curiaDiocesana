import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { Store,select } from "@ngrx/store";
import { SharedService } from "../../services/shared/shared.service";
import { loadRegister } from "src/app/actions/login.actions";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styles: [
  ],
  providers:[SharedService]
})
export class RegistrarseComponent implements OnInit {

  pantallaCarga$:Observable<boolean>;
  formRegister:FormGroup;

  constructor(private fb:FormBuilder, private sharedSvc:SharedService,private store:Store<{pantallaCarga:boolean}>) {
    this.pantallaCarga$ = store.pipe(select('pantallaCarga'))
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


  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formRegister,control,pattron);
  }

  RegisterUser(){
    this.store.dispatch(loadRegister({userData:this.formRegister.value}))
  }

}
