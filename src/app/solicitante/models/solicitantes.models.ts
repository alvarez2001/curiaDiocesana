export interface proyectosUsuarioSolicitanteAddSolicitud{
  id:number;
  nombre:string;
  disponible:number;
}


export interface SolicitudAgregar{
  responsable:string;
  concepto:string;
  productos:ProductosAgregados[]
}


export interface ProductosAgregados{
  cantidad:number;
  precio:number;
  descripcion:string
}
