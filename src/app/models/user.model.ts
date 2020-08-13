export interface userDataInterface {
  nombres:string;
  apellidos:string;
  nacionalidad:string;
  cedula:string;
  usuario:string;
  password:string;
  email:string;
}

export interface userRecoveryPassword{
  usuario:string;
  email:string;
}

export interface userLoginInterface{
  usuario:string;
  password:string;
}
