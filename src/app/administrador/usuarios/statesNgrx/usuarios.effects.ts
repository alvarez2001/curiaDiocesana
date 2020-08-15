import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from "./usuarios.actions";
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { loadOn, loadOff } from 'src/app/actions/app-actions';
import { UsersService } from "src/app/services/usersAdmin/users.service";
import { of } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';

@Injectable()
export class UsersEffects {

  loadRegisterUserAdmin$ = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.loadRegisterAdmin),
    mergeMap( ({dataAdmin}) => this.usersAdminSvc.registerUserAdmin(dataAdmin).pipe(
        map(val => actions.successRegisterAdmin({successData:val})),
        catchError(error => of(actions.failedRegisterAdmin({failedData:error})))
      ))
    ))


  successRegisterUserAdmin$ = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.successRegisterAdmin),
    mergeMap(({successData}) => {
      this.sharedSvc.mostrarAlertSuccess(successData);
      return of(actions.finishRegisterAdmin())
    }))
  );


  failedRegisterUserAdmin$ = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.failedRegisterAdmin),
    mergeMap(({failedData})=>{
      this.sharedSvc.mostrarAlertError(failedData)
      return of(actions.finishRegisterAdmin())
    })
  ))

  /* ----------------------- LOAD USERS-LIST INACTIVES -------------------- */

  loadUsersListInactive = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.loadUsersInactive),
    mergeMap(() => this.usersAdminSvc.usersInactive().pipe(
      map(val =>actions.successUsersInactive({PaginateUsersList:val})),
      catchError(error => of(actions.failedUsersInactive(error)))
    ))
  ))

  loadUsersListActive = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.LoadusersActive),
    mergeMap(() => this.usersAdminSvc.usersActives().pipe(
      map(val =>actions.successUsersInactive({PaginateUsersList:val})),
      catchError(error => of(actions.failedUsersInactive(error)))
    ))
  ))

  LoadPageUsersList = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.LoadPaginateUsersList),
    mergeMap(({page}) => this.usersAdminSvc.usersListPaginate(page).pipe(
      map(val =>actions.successUsersInactive({PaginateUsersList:val})),
      catchError(error => of(actions.failedUsersInactive(error)))
    ))
  ))

  /* successUsersListInactive = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.successUsersInactive),

  )) */

  failedUsersListInactive = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.failedUsersInactive),
    mergeMap(( {failedData} )=>of(this.sharedSvc.mostrarAlertError(failedData))
    )),{dispatch:false})



  /* ACTIVATED USERS  */


  loadActivatedUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.loadActivatedUser),
    mergeMap(({id}) => this.usersAdminSvc.userActivated(id).pipe(
      map((success)=>actions.successActivatedUser({successData:success})),
      catchError(error => of(actions.failedActivatedUser({failedData:error})))
    ))
  ))

  successActivatedUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.successActivatedUser),
    mergeMap(({successData}) => {
      this.sharedSvc.mostrarAlertSuccess(successData)
      return of(actions.loadUsersInactive())
    })
  ));

  failedActivatedUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.failedActivatedUser),
    mergeMap(({failedData})=> of(this.sharedSvc.mostrarAlertError(failedData)))
  ),
  {
    dispatch:false
  })




  /* INACTIVATED USERS */


  loadInactivatedUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.loadInactivatedUser),
    mergeMap(({id}) => this.usersAdminSvc.userDesactivated(id).pipe(
      map((success)=>actions.successInactivatedUser({successData:success})),
      catchError(error => of(actions.failedInactivatedUser({failedData:error})))
    ))
  ))

  successInactivatedUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.successInactivatedUser),
    mergeMap(({successData}) => {
      this.sharedSvc.mostrarAlertSuccess(successData)
      return of(actions.LoadusersActive())
    })
  ));

  failedInactivatedUser = createEffect(()=>
  this.actions$.pipe(
    ofType(actions.failedInactivatedUser),
    mergeMap(({failedData})=> of(this.sharedSvc.mostrarAlertError(failedData)))
  ),
  {
    dispatch:false
  })


  constructor(private actions$:Actions,private store:Store, private usersAdminSvc:UsersService, private sharedSvc:SharedService){}
}
