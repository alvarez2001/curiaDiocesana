import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from "../ngrxStates/modificarCuenta.actions";
import { UserModel } from 'src/app/administrador/usuarios/models/usersInactive.models';
import * as selectors from '../ngrxStates/modificarCuenta.selectors';
import { Observable } from 'rxjs';
import { StateModificarData, StateGetUserActive, ChangePasswordInterface, StateInitialPasswordChange } from '../models/stateModificarData.interface';

@Injectable({
  providedIn: 'root'
})
export class StoresSharedModificarCuentaModuleService {

  constructor(private store:Store) { }


  DistpathChangePasswords(passwords:ChangePasswordInterface){
    this.store.dispatch(actions.LoadChangePassword({passwords:passwords}))
  }

  DistpathGetDetailUser(){
    this.store.dispatch(actions.ChargeDetailUser())
  }

  DistpatchModificarCuenta(datos:UserModel){
    this.store.dispatch(actions.CargarModificarDatosCuenta({modifiedData:datos}))
  }

  ResetModificarCuenta(){
    this.store.dispatch(actions.ResetModificarDatosCuenta())
  }

  getModifiedData():Observable<StateModificarData>{
    return this.store.select(selectors.getModifiedState)
  }

  getDetailUser():Observable<StateGetUserActive>{
    return this.store.select(selectors.getDetailState)
  }

  getChangePassword():Observable<StateInitialPasswordChange>{
    return this.store.select(selectors.getPasswordChangeState)
  }
}
