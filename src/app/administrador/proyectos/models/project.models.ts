import { PaginateMolde } from '../../usuarios/models/usersInactive.models';

export type tipoMoneda  = 'Dolar' | 'Euro';
export const tipoMonedaConst =  ['Dolar','Euro'];
export type MostrarConceptoType = 'SI' | 'NO';
export const MostrarConcepto = ['SI','NO']

export type tipoCuenta = 'Nacional'| 'Internacional';
export type nacionalidades = 'V'|'E'|'J'|'G'|'P';
export const nacionalidadesMask = [
  {
    value:'V',
    nacionalidadMask:'Venezolana ( V )'
  },
  {
    value:'J',
    nacionalidadMask:'Jurídico ( J )'
  },
  {
    value:'E',
    nacionalidadMask: 'Extranjero ( E )'
  },
  {
    value:'G',
    nacionalidadMask:'Gubernamental ( G )'
  },
  {
    value:'P',
    nacionalidadMask:'Pasaporte ( P )'
  }

]


export const statusProject:{value:number,status:string}[] = [
  {value:0, status:'Inactivo'},
  {value:1, status:'Activo'},
  {value:2, status:'En espera'},
];

export interface ProjectModel {
  codigo:string;
  nombre:string;
  aprobado:number;
  comision:number;
  status:number;
  moneda:tipoMoneda;
  alias?:string | null ;
  usuario?:number | null;
  usuario_id?:number | null;
}


export interface ProjectModelComplete extends ProjectModel{
  id:         number;
  disponible: string;
  created_at: Date;
  updated_at: Date;
}

export interface PaginateProjectsComplete extends PaginateMolde{
  data:ProjectModelComplete[];
}


export interface ModelModificarDatosInformacion {
  nombre:string;
  status:number;
  moneda:tipoMoneda;
  alias?:string;
}

export interface ModelModificarAprobadoProyecto {
  aprobado:number;
  comision:number;
  descripcion:string;
}

export interface AumentarProyectoDesdeLaComision{
  monto:number;
  descripcion:string;
}


export interface CrearNuevoConceptoInterface {
  id?:number,
  descripcion:string;
  solicitud:MostrarConceptoType;
}


export interface bancosModel{
  id:             number;
  titular:        string;
  identificacion: string;
  entidad:        string;
  numero:         string;
  alias:          string;
}

export class CrearBancoModel{

  static crearbancoModelObj(data:Object):CrearBancoModel{
    const obj:Object = data;
    if(obj['alias'] === ''){
      delete obj['alias']
    }
    if(obj['tipo_cuenta'] === 'Nacional'){
      delete obj['numero_internacional'];
    }
    if(obj['tipo_cuenta'] === 'Internacional'){
      delete obj['numero_nacional'];
    }

    return new CrearBancoModel(
      obj['nombres'],
      obj['apellidos'],
      obj['nacionalidad'],
      obj['identificacion'],
      obj['banco'],
      obj['tipo_cuenta'],
      obj['numero_nacional'],
      obj['numero_internacional'],
      obj['alias'],
      obj['id']
    )
  }

  constructor(
    public nombres:string,
    public apellidos:string,
    public nacionalidad:nacionalidades,
    public identificacion:string,
    public banco:string,
    public tipo_cuenta:tipoCuenta,
    public numero_nacional?:string,
    public numero_internacional?:string,
    public alias?:string,
    public id?:number
  ){}
}






















export const listadoBancos:{codigo:string,nombre:string,rif:string}[] = [
  {
      codigo : " 0001 " ,
      nombre : " Banco Central de Venezuela " ,
      rif : " G200001100 "
  },
  {
      codigo : " 0102 " ,
      nombre : " Banco de Venezuela SACA Banco Universal " ,
      rif : " G200099976 "
  },
  {
      codigo : " 0104 " ,
      nombre : " Venezolano de Crédito, SA Banco Universal " ,
      rif : " J000029709 "
  },
  {
      codigo : " 0105 " ,
      nombre : " Banco Mercantil, CA Banco Universal " ,
      rif : " J000029610 "
  },
  {
      codigo : " 0108 " ,
      nombre : " Banco Provincial, SA Banco Universal " ,
      rif : " J000029679 "
  },
  {
      codigo : " 0114 " ,
      nombre : " Bancaribe CA Banco Universal " ,
      rif : " J000029490 "
  },
  {
      codigo : " 0115 " ,
      nombre : " Banco Exterior CA Banco Universal " ,
      rif : " J000029504 "
  },
  {
      codigo : " 0116 " ,
      nombre : " Banco Occidental de Descuento, Banco Universal CA " ,
      rif : " J300619460 "
  },
  {
      codigo : " 0128 " ,
      nombre : " Banco Caroní CA Banco Universal " ,
      rif : " J095048551 "
  },
  {
      codigo : " 0134 " ,
      nombre : " Banesco Banco Universal SACA " ,
      rif : " J070133805 "
  },
  {
      codigo : " 0137 " ,
      nombre : " Banco Sofitasa, Banco Universal " ,
      rif : " J090283846 "
  },
  {
      codigo : " 0138 " ,
      nombre : " Banco Plaza, Banco Universal " ,
      rif : " J002970553 "
  },
  {
      codigo : " 0146 " ,
      nombre : " Banco de la Gente Emprendedora CA " ,
      rif : " J301442040 "
  },
  {
      codigo : " 0151 " ,
      nombre : " BFC Banco Fondo Común CA Banco Universal " ,
      rif : " J000723060 "
  },
  {
      codigo : " 0156 " ,
      nombre : " 100% Banco, Banco Universal CA " ,
      rif : " J085007768 "
  },
  {
      codigo : " 0157 " ,
      nombre : " DelSur Banco Universal CA " ,
      rif : " J000797234 "
  },
  {
      codigo : " 0163 " ,
      nombre : " Banco del Tesoro, CA Banco Universal " ,
      rif : " G200051876 "
  },
  {
      codigo : " 0166 " ,
      nombre : " Banco Agrícola de Venezuela, CA Banco Universal " ,
      rif : " G200057955 "
  },
  {
      codigo : " 0168 " ,
      nombre : " Bancrecer, SA Banco Microfinanciero " ,
      rif : " J316374173 "
  },
  {
      codigo : " 0169 " ,
      nombre : " Mi Banco, Banco Microfinanciero CA " ,
      rif : " J315941023 "
  },
  {
      codigo : " 0171 " ,
      nombre : " Banco Activo, Banco Universal " ,
      rif : " J080066227 "
  },
  {
      codigo : " 0172 " ,
      nombre : " Bancamica, Banco Microfinanciero CA " ,
      rif : " J316287599 "
  },
  {
      codigo : " 0173 " ,
      nombre : " Banco Internacional de Desarrollo, CA Banco Universal " ,
      rif : " J294640109 "
  },
  {
      codigo : " 0174 " ,
      nombre : " Banplus Banco Universal, CA " ,
      rif : " J000423032 "
  },
  {
      codigo : " 0175 " ,
      nombre : " Banco Bicentenario del Pueblo de la Clase Obrera, Mujer y Comunas BU " ,
      rif : " G200091487 "
  },
  {
      codigo : " 0176 " ,
      nombre : " Novo Banco, SA Sucursal Venezuela Banco Universal " ,
      rif : " J308918644 "
  },
  {
      codigo : " 0177 " ,
      nombre : " Banco de la Fuerza Armada Nacional Bolivariana, BU " ,
      rif : " G200106573 "
  },
  {
      codigo : " 0190 " ,
      nombre : " Citibank NA " ,
      rif : " J000526621 "
  },
  {
      codigo : " 0191 " ,
      nombre : " Banco Nacional de Crédito, CA Banco Universal " ,
      rif : " J309841327 "
  },
  {
      codigo : " 0601 " ,
      nombre : " Instituto Municipal de Crédito Popular " ,
      rif : " G200068973 "
  }
]
