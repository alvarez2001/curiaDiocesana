import { Component, OnInit } from '@angular/core';
import { InfoUsuariosListadosComponent } from "./../info-usuarios-listados/info-usuarios-listados.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-inactivos',
  templateUrl: './listar-inactivos.component.html',
  styles: [
  ]
})
export class ListarInactivosComponent implements OnInit {

  tituloPrincipal:string = 'listar usuarios inactivos';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  mostrarInfo(data){
    const dialogRef = this.dialog.open(InfoUsuariosListadosComponent, {
      width: '1000px',
    });
  }


}
