import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/administrador/usuarios/models/usersInactive.models';
import { LogRegService } from 'src/app/services/login/log-reg.service';
import * as moment from 'moment';
import { StoresSharedModificarCuentaModuleService } from '../services/stores-shared-modificar-cuenta-module.service';
import { Subscription, Observable } from 'rxjs';
import { StateGetUserActive } from '../models/stateModificarData.interface';

@Component({
  selector: 'app-ver-mis-datos',
  templateUrl: './ver-mis-datos.component.html',
  providers:[LogRegService]
})
export class VerMisDatosComponent implements OnInit {

  data:UserModel;
  fechaCreacion:string;
  ultimaActualizacion:string;

  detailUser$:Observable<StateGetUserActive>;


  constructor(private loginSvc:LogRegService, private distpachModificarDatosSvc:StoresSharedModificarCuentaModuleService) { }

  ngOnInit(): void {

  this.cargarInfo();


    this.data = this.loginSvc.getDetailUser();
    this.fechaCreacion = moment(this.data.created_at).format('DD/MM/YYYY hh:mm A')
    this.ultimaActualizacion = moment(this.data.updated_at).locale('es').fromNow();
  }


  cargarInfo(){
    this.distpachModificarDatosSvc.DistpathGetDetailUser();
    this.detailUser$ = this.distpachModificarDatosSvc.getDetailUser();
  }


  fechaFormatNow(data:Date):string{
    return moment(data).format('DD/MM/YYYY hh:mm A')
  }

  fechaHaceCuandoFueUltima(data:Date):string{
    return moment(data).locale('es').fromNow()
  }
}
