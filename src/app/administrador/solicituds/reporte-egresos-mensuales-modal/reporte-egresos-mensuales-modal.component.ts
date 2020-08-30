import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Global } from 'src/app/services/Global';

@Component({
  selector: 'app-reporte-egresos-mensuales-modal',
  templateUrl: './reporte-egresos-mensuales-modal.component.html',
  styles: [
  ]
})
export class ReporteEgresosMensualesModalComponent implements OnInit {

  active:boolean = true;
  Form:FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ReporteEgresosMensualesModalComponent>,
    private sharedSvc:SharedService,
    private fb:FormBuilder
  ) {
    this.MostrarForm();
  }

  ngOnInit(): void {
  }

  cerrarDialog(){
    this.active = false;
    setTimeout(()=> this.dialogRef.close(), 300)
  }

  private MostrarForm(){
    this.Form = this.fb.group({
      ano:['',[Validators.required,Validators.pattern('[0-9]+'), Validators.minLength(4), Validators.maxLength(4), Validators.min(2015)]],
      mes:['',[Validators.required,Validators.pattern('[0-9]+'), Validators.maxLength(2), Validators.minLength(1), Validators.max(12), Validators.min(0)]]
    })
  }

  comprobar(valor:string){
    return this.sharedSvc.FormatoNumericoFecha(valor);
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.Form,control,pattron);
  }

  BuscarPorMes(){
    const ano = this.Form.get('ano').value
    const dia = parseInt(this.Form.get('mes').value)
    if(dia < 10){
      return window.open(`${Global.url}reporte/egresos/dia/${ano}-0${dia}`, 'Reportes de egresos por mes')
    }
    return window.open(`${Global.url}reporte/egresos/dia/${ano}-${dia}`, 'Reportes de egresos por mes')
  }
}
