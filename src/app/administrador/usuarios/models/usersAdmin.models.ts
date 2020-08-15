import { HttpErrorResponse } from '@angular/common/http';

export interface UsersAdminInterface{
  nombres:string;
  apellidos:string;
  email:string;
  password?:string;
  cedula:string;
  nacionalidad:string;
  usuario:string;
}

export interface InitialDataRegisterAdmin{
  dataAdmin:UsersAdminInterface | {};
  successData:string;
  failedData:HttpErrorResponse | undefined;
  loading:boolean;
}
