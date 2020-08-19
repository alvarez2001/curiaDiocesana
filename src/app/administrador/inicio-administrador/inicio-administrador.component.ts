import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.component.html',
  providers:[LogRegService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InicioAdministradorComponent implements OnInit {

  constructor(private loginSvc:LogRegService) { }

  ngOnInit(): void {
  }


  retornarNombre():string{
    const detailUser = this.loginSvc.getDetailUser();
    return `${detailUser.apellidos}, ${detailUser.nombres}`
  }

}
