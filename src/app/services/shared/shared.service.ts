import { Injectable } from '@angular/core';
import { ValidationErrors, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router:Router) { }

  mostrarErrores(form, control, pattron):string{
    const errores:ValidationErrors = form.get(control).errors;
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
    if(errores === null){
      mostrarErrores = 'Campo exitoso';
    }

    return mostrarErrores;

  }

  redirigirDondeQuiera(redireccion){
    return this.router.navigate([redireccion])
  }


  mostrarAlertSuccess(data){
    return Swal.fire({
      title: 'Respuesta exitosa',
      html:data,
      icon:'success',
      background:'#fff url(/assets/fondos/trees.png)',
      backdrop:'rgba(0,0,0,.83)',
      width:600,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  mostrarAlertError(data:HttpErrorResponse){
    console.log(data)


    const conexionFallida = `<ul><li>Revise su internet</li></ul>`;

    if(data?.status){
      switch (data.status) {
        case 0:
          return this.alertError(conexionFallida, 'Conexión fallida con el servidor');
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

  private alertError(error,msjErrorTitle:string){
    return Swal.fire({
      title: msjErrorTitle,
      html:error,
      icon:'error',
      width:600,
      background:'#fff url(/assets/fondos/trees.png)',
      backdrop:'rgba(0,0,0,.83)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
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


}
