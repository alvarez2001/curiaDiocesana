import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-usuarios-listados',
  templateUrl: './info-usuarios-listados.component.html',
  styles: [
  ]
})
export class InfoUsuariosListadosComponent implements OnInit {



  constructor( public dialogRef: MatDialogRef<InfoUsuariosListadosComponent>,) { }

  ngOnInit(): void {
  }

  cerrarDialog(){
    this.dialogRef.close();
  }

}
