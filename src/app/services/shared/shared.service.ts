import { Injectable, ErrorHandler } from '@angular/core';
import { ValidationErrors, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { HttpErrorResponse } from '@angular/common/http';
import { AsignarTasaModalComponent } from 'src/app/administrador/solicituds/asignar-tasa-modal/asignar-tasa-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private styloAlert:Object = {
    width:600,
    background:'#fff url(/assets/fondos/trees.png)',
      backdrop:'rgba(0,0,0,.83)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  }

  constructor(private router:Router) { }

  mostrarErrores(form, control, pattron):string{
    const errores:ValidationErrors = form.get(control)?.errors;
    let mostrarErrores:string = '';
    if(errores?.required) {
      mostrarErrores =  `El campo ${control} es requerido`
    };
    if(errores?.pattern){
      const pattern = errores?.pattern;
      mostrarErrores = `El campo ${control} solo acepta ${pattron}`;
      /* y actualmente esta intentando ingresar ${pattern.actualValue} */
    }
    if(errores?.minlength) {
      const minLen = errores?.minlength;
      mostrarErrores =  `El campo ${control} debe contener como minimo ${minLen.requiredLength} caracteres`
    };
    if(errores?.maxlength) {
      const maxlen = errores?.maxlength;
      mostrarErrores = `El campo ${control} debe contener como maximo ${maxlen.requiredLength} caracteres`;
    };
    if(errores?.max){
      const max = errores?.max.max;
      mostrarErrores = `El campo ${control} debe ser menor o igual a ${max}`
    }
    if(errores?.min){
      const min = errores?.min.min;
      mostrarErrores = `El campo ${control} debe ser mayor a ${min}`
    }
    if(errores === null){
      mostrarErrores = 'Campo exitoso';
    }

    return mostrarErrores;

  }

  formatoNumerico(valor):boolean{
    const tecla = valor.key;
    const patron = /[0-9\.]/;
    return patron.test(tecla)
  }

  FormatoNumericoFecha(valor):boolean{
    const tecla = valor.key;
    const patron = /[0-9]/;
    return patron.test(tecla)
  }

  formatoNumericoDecimal(valor):boolean{
    const tecla = valor.key;
    const patron = /[0-9\.]/;
    const Punto = /[\.]/
    if(Punto.test(valor.target.value) && Punto.test(tecla)){
      return false;
    }
    return patron.test(tecla)
  }

  redirigirDondeQuiera(redireccion){
    return this.router.navigate([redireccion])
  }


  mostrarAlertSuccess(data){
    return Swal.fire({
      title: 'Respuesta exitosa',
      html:data,
      icon:'success',
      ...this.styloAlert
    })
  }

  mostrarAlertError(data:any){



    if(!data || !navigator.onLine){
      return this.ErrorAlertConexionFallida();
    }

    if(data?.status){

      switch (data.status) {
        case 0:
          return this.ErrorAlertConexionFallida();
        case 406:
          return this.alertStatusErrorDefault(data,'Error encontrado');
        case 403:
          return this.alertStatusErrorDefault(data,'Permiso denegado')
        default:
          return this.alertStatusErrorDefault(data);;
      }
    }
  }
  /* 3uurvjzdhDDQrX */

  private ErrorAlertConexionFallida(){
    return Swal.fire({
      title:'Conexión fallido con el servidor',
      text:'Revise su internet',
      icon:'error',
      ...this.styloAlert
    })
  }

  alertError(error,msjErrorTitle:string){
    return Swal.fire({
      title: msjErrorTitle,
      html:error,
      icon:'error',
      ...this.styloAlert
    })
  }

  private alertStatusErrorDefault(data:HttpErrorResponse, title = `Error`){
    return this.alertError(this.comprobarObjecto(data),title);
  }


  private comprobarObjecto(data:HttpErrorResponse){
    if(typeof data.error === 'object'){
      return this.separarObject(data.error)
    }else{
      return data.error
    }
  }

  private separarObject(error){
    const ul = document.createElement('ul');
    for (const prop in error) {
      const li = document.createElement('li');
      const text = document.createTextNode(error[prop]);
      li.appendChild(text);
      ul.appendChild(li);
    }
    return ul;
  }



  enabled(form:FormGroup){
    for (const key in form.value) {
      form.controls[key].enable()
    }
  }

  disabled(form:FormGroup){
    for (const key in form.value) {
      form.controls[key].disable()
    }
  }



  ConfirmarGenerarCodigo(response:any){
    return Swal.fire({
      title: 'Quieres generar un código?',
      text: response,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:'No'
    })
  }


}
