import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ModeloPersonalizada } from '../models/solicitud-i';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { SolicitudsService } from '../services/solicituds.service';

@Component({
  selector: 'app-busqueda-personalizada',
  templateUrl: './busqueda-personalizada.component.html',
  styleUrls: ['./busqueda-personalizada.component.scss']
})
export class BusquedaPersonalizadaComponent implements OnInit, OnDestroy {


  formBusqueda:FormGroup;
  constructor(
    private fb:FormBuilder,
    private sharedSvc:SharedService,
    private solicitudNgrxSvc:SolicitudsNgrxService,
    private solicitudSvc:SolicitudsService

  ) {
    this.construirForm();
  }
  ngOnDestroy(){
    this.solicitudNgrxSvc.ReiniciarReportePorDia()
  }

  ngOnInit(): void {
  }

  private construirForm(){
    this.formBusqueda = this.fb.group({
      busqueda:['',[Validators.required]],
      valor:['',[Validators.required]],
      mes:['',[Validators.required]],
      ano:['',[Validators.required]]
    })
  }

  buscarData(){
    const dato:ModeloPersonalizada = this.formBusqueda.value
    this.solicitudSvc.BusquedaPersonalizadaAPI(dato)
  }


  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formBusqueda,control,pattron);
  }
}
