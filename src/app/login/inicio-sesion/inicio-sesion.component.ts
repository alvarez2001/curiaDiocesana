import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Store,select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { loadLoginUser } from 'src/app/actions/login.actions';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  providers:[SharedService]
})
export class InicioSesionComponent implements OnInit {
  formLogin:FormGroup;
  pantallaCarga$:Observable<boolean>;
  constructor(private fb:FormBuilder,private sharedSvc:SharedService, private store:Store<{pantallaCarga:boolean}>) {
    this.pantallaCarga$ = store.pipe(select('pantallaCarga'))
   }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      usuario:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      password:['',[Validators.required]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formLogin,control,pattron);
  }

  loginUser(){
    this.store.dispatch(loadLoginUser({userLogin:this.formLogin.value}))
  }

}
