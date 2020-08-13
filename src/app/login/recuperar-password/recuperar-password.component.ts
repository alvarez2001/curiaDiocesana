import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Store,select } from "@ngrx/store";
import { Observable } from 'rxjs';
import { loadRecoveryPassword } from "../../actions/login.actions";

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styles: [
  ],
  providers:[SharedService]
})
export class RecuperarPasswordComponent implements OnInit {

  pantallaCarga$:Observable<boolean>;
  formRecuperar:FormGroup;
  constructor(private fb:FormBuilder,private sharedSvc:SharedService, private store:Store<{pantallaCarga:boolean}>) {
    this.pantallaCarga$ = store.pipe(select('pantallaCarga'))
   }

  ngOnInit(): void {
    const patronEmail = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}';
    this.formRecuperar = this.fb.group({
      usuario:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.pattern(patronEmail)]]
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formRecuperar,control,pattron);
  }

  recuperarPassword(){
    this.store.dispatch(loadRecoveryPassword({userRecovery:this.formRecuperar.value}))
  }

}
