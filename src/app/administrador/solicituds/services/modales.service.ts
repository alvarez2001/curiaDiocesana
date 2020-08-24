import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsignarTasaModalComponent } from '../asignar-tasa-modal/asignar-tasa-modal.component';
import { IntroducirClaveSeguridadComponent } from '../introducir-clave-seguridad/introducir-clave-seguridad.component';

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


}
