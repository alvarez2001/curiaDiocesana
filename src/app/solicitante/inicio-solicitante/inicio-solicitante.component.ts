import { Component, OnInit } from '@angular/core';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-inicio-solicitante',
  templateUrl: './inicio-solicitante.component.html',
  styleUrls: ['./inicio-solicitante.component.scss']
})
export class InicioSolicitanteComponent implements OnInit {
  constructor(private loginSvc:LogRegService) { }

  ngOnInit(): void {
  }


  retornarNombre():string{
    const detailUser = this.loginSvc.getDetailUser();
    return `${detailUser.apellidos}, ${detailUser.nombres}`
  }

}
