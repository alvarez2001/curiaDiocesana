import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoUsuariosListadosComponent } from '../info-usuarios-listados/info-usuarios-listados.component';

@Component({
  selector: 'app-listar-activos',
  templateUrl: '../listar-inactivos/listar-inactivos.component.html',
  styles: [
  ]
})
export class ListarActivosComponent implements OnInit {

  tituloPrincipal:string = 'listar usuarios activos';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  mostrarInfo(data){
    const dialogRef = this.dialog.open(InfoUsuariosListadosComponent, {
      width: '1000px',
    });
  }

}
