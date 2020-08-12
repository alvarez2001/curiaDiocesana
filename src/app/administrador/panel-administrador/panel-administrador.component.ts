import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel-administrador',
  templateUrl: './panel-administrador.component.html',
  styles: [
  ]
})
export class PanelAdministradorComponent implements OnInit {

  public rutaActual:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe((res) => {
      this.rutaActual = res[0].path;

    })
  }



}
