import { Component, OnInit } from '@angular/core';
import { LogRegService } from '../services/login/log-reg.service';

@Component({
  selector: 'app-asides-nav-administrador',
  templateUrl: './asides-nav-administrador.component.html',
  styleUrls: ['./asides-nav-administrador.component.scss']
})
export class AsidesNavAdministradorComponent implements OnInit {

  constructor(private LogRegSvc:LogRegService) { }

  ngOnInit(): void {
  }
  ValidarPermiso(permisos:string[]):boolean{
    return this.LogRegSvc.VerificarPermiso(permisos)
  }
}
