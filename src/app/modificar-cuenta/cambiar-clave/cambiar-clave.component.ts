import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { StoresSharedModificarCuentaModuleService } from '../services/stores-shared-modificar-cuenta-module.service';
import { Observable, Subscription } from 'rxjs';
import { StateInitialPasswordChange } from '../models/stateModificarData.interface';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styles: [],
})
export class CambiarClaveComponent implements OnInit, OnDestroy {
  formContrasena: FormGroup;

  passwordsStates$:Observable<StateInitialPasswordChange>
  private subscription:Subscription = new Subscription()

  constructor(private fb: FormBuilder, private sharedSvc:SharedService, private StoresSharedModificar:StoresSharedModificarCuentaModuleService) {}

  ngOnInit(): void {
    this.cargarForm();
    this.buscarDataStorage()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  buscarDataStorage(){
    this.passwordsStates$ = this.StoresSharedModificar.getChangePassword();

    this.subscription.add(
      this.passwordsStates$.subscribe(res => {
        if(res?.success === 1){
          this.formContrasena.reset()
        }
      })
    )
  }


  cargarForm() {
    this.formContrasena = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public passwordsMatch = (_form: FormGroup): boolean => {
      if (_form.value.password === _form.value.password_confirmation) {
        return true;
      } else {
        return false;
      }
  };


  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formContrasena,control,pattron);
  }

  cambiarClave(){
    this.StoresSharedModificar.DistpathChangePasswords(this.formContrasena.value)
  }
}
