import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsignarTasaModalComponent } from '../asignar-tasa-modal/asignar-tasa-modal.component';
import { IntroducirClaveSeguridadComponent } from '../introducir-clave-seguridad/introducir-clave-seguridad.component';
import { AgregarOperacionComponent } from '../agregar-operacion/agregar-operacion.component';
import { SolicitudModel, EgresosIngresosModel } from '../models/solicitud-i';
import { InfoEgresoDetalladoComponent } from '../info-egreso-detallado/info-egreso-detallado.component';

@Injectable({
  providedIn: 'root'
})
export class ModalesService {

  constructor(private dialog: MatDialog) { }

  ModalAsignarTasa(idSolicitud:number){
    return this.dialog.open(AsignarTasaModalComponent,{
      data:idSolicitud,
      disableClose:true
    })
  }

  ModalIntroducirClave(tipoAsignacion:number){
    return this.dialog.open(IntroducirClaveSeguridadComponent,{
      data:tipoAsignacion,
      disableClose:true
    })
  }

  ModalAgregarOperacion(data:SolicitudModel){
    return this.dialog.open(AgregarOperacionComponent, {
      width: '1000px',
      data:data,
      disableClose:true
    });
  }


  ModalInfoEgreso(data:EgresosIngresosModel){
    return this.dialog.open(InfoEgresoDetalladoComponent,{
      width:'1000px',
      data:data,
      disableClose:true
    })
  }


}
