import { loadOn, loadOff } from "../actions/app-actions";
import { createReducer, on } from "@ngrx/store";

const _pantallaCarga = createReducer(false,
  on(loadOn,state => true),
  on(loadOff, state => false)
  )

  export function pantallaCarga(state,action){
    return _pantallaCarga(state,action)
  }
