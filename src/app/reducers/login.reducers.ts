import { createReducer, on, State } from "@ngrx/store";
import * as actions from '../actions/login.actions';
import { HttpErrorResponse } from '@angular/common/http';

const _registerUser = createReducer({},
  on(actions.loadRegister,(state,userData) => userData),
  on(actions.registerSuccess, (state,successData)=> successData),
  on(actions.registerFailed, (state,failedData ) => failedData)
  );

  export function registerUser(state,action){
    return _registerUser(state,action);
  }


const _recoveryPassword = createReducer({},
  on(actions.loadRecoveryPassword,(state,userRecovery) => userRecovery),
  on(actions.SuccessRecoveryPassword,(state,successData) => successData),
  on(actions.FailedRecoveryPassword,(state,failedData) => failedData)
  );

  export function recoveryPassword(state,action){
    return _recoveryPassword(state,action);
  }


  const _loginUser = createReducer({},
    on(actions.loadLoginUser, (state,userLogin) => userLogin),
    on(actions.successLoginUser, (state,successData) => successData),
    on(actions.failedLoginUser, (state,failedData) => failedData)
    );

    export function loginUser(state,action){
      return _loginUser(state,action);
    }

    export interface detailUserReducer{
     loaded:boolean;
     loading:boolean;
     error:{};
     userDetail:{}
    }

    const initialDetail:detailUserReducer = {
      loaded:false,
      loading:false,
      userDetail:{},
      error:{}
    }

  const _detailUser = createReducer(
    initialDetail,
    on(actions.loadDetailUser,(state) => {
      return {loading:true,loaded:false}
    }),
    on(actions.successDetailUser,(state,successData) => {
      return {loaded:true,loading:false, userDetail:successData, error:{}}
    }),
    on(actions.failedDetailUser, (state,failedData) => {
      return {loaded:false,loading:false, userDetail:{},error:failedData}
    })
    );

    export function detailUser(state,action){
      return _detailUser(state,action)
    }
