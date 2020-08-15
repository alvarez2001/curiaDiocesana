import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoUsuariosListadosComponent } from '../info-usuarios-listados/info-usuarios-listados.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { InitialStateUsersList, UserModel } from '../models/usersInactive.models';
import { UsersService } from 'src/app/services/usersAdmin/users.service';
import { loadUsersInactive, LoadPaginateUsersList, LoadusersActive } from '../statesNgrx';
import { LogRegService } from 'src/app/services/login/log-reg.service';

@Component({
  selector: 'app-listar-activos',
  templateUrl: '../listar-inactivos/listar-inactivos.component.html',
  providers:[UsersService,LogRegService]
})
export class ListarActivosComponent implements OnInit {

  tituloPrincipal:string = 'listar usuarios activos';

  usersList$:Observable<InitialStateUsersList>;
  constructor(public dialog: MatDialog,private store:Store<{ListUsersInactiveOrActive:InitialStateUsersList}>, private usersSvc:UsersService, private loginSvc:LogRegService) { }

  ngOnInit(): void {
    this.chargeList();
    this.usersList$ = this.usersSvc.getUsersListState()
  }

  mostrarInfo(data:UserModel){
    const dialogRef = this.dialog.open(InfoUsuariosListadosComponent, {
      width: '1000px',
      data:data
    });
  }

  chargeList(){
    this.store.dispatch(LoadusersActive())
  }

  nombreCompleto(user:UserModel):string{
    return `${user.apellidos}, ${user.nombres}`
  }

  paginate(page:string, pageNumber:number){
    this.store.dispatch(LoadPaginateUsersList({page:`${page}?page=${pageNumber}`}))
  }
  selectPage(lastPage:number):number[]{

    const data:number[] = [];

    for(let i = 1; i <= lastPage; i++){
      data.push(i)
    };
    return data;

  }


  buscarPagina(select:number, path:string){
    return this.paginate(path,select)
  }

  tipoUsuario(tipo:number):string{
    return this.loginSvc.devolverTipoUsuario(tipo)
  }
}
