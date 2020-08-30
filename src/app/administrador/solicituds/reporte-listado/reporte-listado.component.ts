import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-reporte-listado',
  templateUrl: './reporte-listado.component.html',
  styleUrls: ['./reporte-listado.component.scss']
})
export class ReporteListadoComponent implements OnInit {

  formSelect:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formSelect = this.fb.group({
      selectTipo:['']
    })
  }

  comprobar(valor:string):boolean{
    const selectValue = this.formSelect.get('selectTipo').value
    if(selectValue === valor){
      return true;
    }
    return false;
  }


}
