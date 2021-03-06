import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProjectModelComplete, statusProject } from '../models/project.models';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-detalle-proyecto-modal',
  templateUrl: './detalle-proyecto-modal.component.html',
  styles: [
  ]
})
export class DetalleProyectoModalComponent implements OnInit {
  active:boolean = true;
  formDetalleModal:FormGroup;

  private statusProyecto:{value:number,status:string}[] = statusProject;
  constructor(public dialogRef: MatDialogRef<DetalleProyectoModalComponent>,@Inject(MAT_DIALOG_DATA) public data:ProjectModelComplete,private fb:FormBuilder, private LogRegSvc:LogRegService) {
    this.formCargarInfo()
  }

  ngOnInit(): void {

  }

  private comprobarStatus(status:number){
    return statusProject.filter(value => value.value === status)[0].status
  }

  ValidarPermiso(permisos:string[]):boolean{
    return this.LogRegSvc.VerificarPermiso(permisos)
  }



  private formCargarInfo(){
    this.formDetalleModal = this.fb.group({
      id:[this.data.id],
      codigo:[this.data?.codigo],
      nombre:[this.data?.nombre],
      aprobado:[this.data?.aprobado],
      disponible:[this.data?.disponible],
      comision:[this.data?.comision],
      status:[this.comprobarStatus(this.data?.status)],
      moneda:[this.data?.moneda],
      alias:[this.data?.alias],
      usuario_id:[this.comprobarNombreUsuario(this.data?.usuario?.nombres,this.data?.usuario?.apellidos)],
      created_at:[this.data?.created_at],
      updated_at:[this.data?.updated_at]
    })
  }

  private comprobarNombreUsuario(nombre:string, apellido:string):string{
    return (nombre) ? `${apellido}, ${nombre}` : 'No posee';
  }

  cerrarDialog(){
    this.active = false;
    this.dialogRef.close()
  }

}
