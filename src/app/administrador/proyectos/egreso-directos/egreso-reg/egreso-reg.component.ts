import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { RegisterProjectState, PaginateProjectsState } from '../../models/ngrxModelsProjects';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ProjectsService } from '../../services/projects.service';
import { BasicDatas } from 'src/app/administrador/usuarios/models/usersInactive.models';

@Component({
  selector: 'app-egreso-reg',
  templateUrl: './egreso-reg.component.html',
  styleUrls: ['./egreso-reg.component.scss']
})
export class EgresoRegComponent implements OnInit {

  @Input('moneda') moneda:string;
  @Input('id') private id:number
  @Output('cargarNuevamenteDatos') CargarProyecto:EventEmitter<number> = new EventEmitter()
  comision:number[] = [0,1,2,3,4,5,6,7,8,9,10];
  formularioAprobado: FormGroup;
  proyectoAprobado$:Observable<BasicDatas>
  subscription:Subscription = new Subscription()
  projectsStateAll:Observable<PaginateProjectsState>;
  public referencias:{value:string, mask:string}[] = [
    {value:'001', mask:'Dolares efectivo ( 001 )'},
    {value:'002', mask:'Víveres ( 002 )'},
    {value:'003', mask:'Transferencias externas ( 003 )'},
    {value:'004', mask:'Materiales ( 004 )'},
    {value:'005', mask:'Suministros ( 005 )'},
    {value:'006', mask:'Pago con tarjeta ( 006 )'},
    {value:'007', mask:'Egreso(bs efectivo) ( 007 )'},
    {value:'008', mask:'Nómina ( 008 )'},
    {value:'009', mask:'Pagos electronicos en divisas ( 009 )'},
    {value:'010', mask:'Ingreso(bs efectivo) ( 010 )'},
    {value:'otros', mask:'Ingresar una referencia bancaria'}
  ]

  constructor(private fb:FormBuilder, private sharedSvc:SharedService,private projectSvc:ProjectsService) {
    this.crearFormulario();
   }

  ngOnInit(): void {
    this.projectsStateAll = this.projectSvc.SelectProjectsAll()
    this.proyectoAprobado$ = this.projectSvc.SeleccionarEgresoDirecto()
    this.subscription.add(
      this.proyectoAprobado$.subscribe(res => {
        if(res.success === 1){
          this.formularioAprobado.reset()
          this.CargarProyecto.emit(this.id)
        }
      })
    )
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  comprobar(valor:number | string | any){
    return this.sharedSvc.formatoNumericoDecimal(valor);
  }

  comprobarString():boolean{
    const form = this.formularioAprobado.value;
    let valor:boolean = false;
    if(form.referencia === 'otros' || form.referencia === '002' || form.referencia === '005'){
     valor = true;
    }
    if((form.referencia === 'otros' && form.referenciaBancaria !== '' ) || (form.referencia === '002' && form.proyecto_ingreso !== '') || (form.referencia === '005' && form.proyecto_ingreso !== '')){
     valor = false;
    }

    return valor
   }


  private crearFormulario():void {
    this.formularioAprobado = this.fb.group({
      comision:['', [Validators.required,Validators.pattern('[0-9\.]+'), Validators.maxLength(11)]],
      total:['', [Validators.required,Validators.pattern('[0-9\.]+')]],
      tasa:['', [Validators.required,Validators.pattern('[0-9\.]+')]],
      concepto:['',[Validators.required,Validators.maxLength(180)]],
      referencia:['',[Validators.required, Validators.maxLength(15)]],
      referenciaBancaria:['',[Validators.pattern('[0-9]+'), Validators.maxLength(15)]],
      fecha_bancaria:['',[Validators.required]],
      proyecto_ingreso:['']
    })
  }

  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.formularioAprobado,control,pattron);
  }

  guardarInformacionEgreso(){
    const form = this.formularioAprobado;
    const obj = Object.assign({},form.value, {referencia:this.comprobarReferencias(form)});
    delete obj.referenciaBancaria;


    switch (form.get('referencia').value) {
      case '002':
        break;
      case '005':
        break;
      default:
        delete obj.proyecto_ingreso;
        break;
    }
    this.projectSvc.CargarEgresoDirecto(this.id,obj)
  }



  private comprobarReferencias(form:FormGroup):string{
    let referencia:string = form.get('referencia').value;
    if(form.get('referencia').value === 'otros'){
      referencia = form.get('referenciaBancaria').value;
    }
    return referencia
  }

}
