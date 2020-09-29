import { Component, OnInit, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolicitudModel, EjecucionSolicitud } from '../models/solicitud-i';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { ProjectsService } from '../../proyectos/services/projects.service';
import { Observable, Subscription } from 'rxjs';
import { PaginateProjectsState } from '../../proyectos/models/ngrxModelsProjects';
import { SolicitudsNgrxService } from '../services/solicituds-ngrx.service';
import { BasicDatas } from '../../usuarios/models/usersInactive.models';

@Component({
  selector: 'app-agregar-operacion',
  templateUrl: './agregar-operacion.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AgregarOperacionComponent implements OnInit, OnDestroy {

  active:boolean = true;
  public FormOperacion:FormGroup;
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

  projectsStateAll:Observable<PaginateProjectsState>;
  stateOperacion:Observable<BasicDatas>;

  private subscripbers:Subscription[] = [];

  constructor(
    private dialogRef: MatDialogRef<AgregarOperacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:SolicitudModel,
    private sharedSvc:SharedService,
    private fb:FormBuilder,
    private cdRef:ChangeDetectorRef,
    private projectsSvc:ProjectsService,
    private solicitudNgrxSvc:SolicitudsNgrxService
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.stateOperacion = this.solicitudNgrxSvc.SeleccionarStateOperacion();
    this.projectsStateAll = this.projectsSvc.SelectProjectsAll()
    this.subscripbers.push(
      this.stateOperacion.subscribe(res => {
        if(res.loading){
          this.sharedSvc.disabled(this.FormOperacion);

        }else{
          this.sharedSvc.enabled(this.FormOperacion);

        }


        if(res.success === 1){
          this.cerrarDialog(true);
        }
        this.cdRef.detectChanges();
      })
    )
    this.cargarProyectos();

  }

  ngOnDestroy(){
    this.subscripbers.forEach(element => element.unsubscribe());
    this.solicitudNgrxSvc.ReiniciarRegistroOperacion();
  }

  comprobarString():boolean{
   const form = this.FormOperacion.value;
   let valor:boolean = false;
   if(form.referencia === 'otros' || form.referencia === '002' || form.referencia === '005'){
    valor = true;
   }
   if((form.referencia === 'otros' && form.referenciaBancaria !== '' ) || (form.referencia === '002' && form.proyecto_ingreso !== '') || (form.referencia === '005' && form.proyecto_ingreso !== '')){
    valor = false;
   }

   return valor
  }

  guardarInformacion(){
    const form = this.FormOperacion;
    const obj:EjecucionSolicitud = Object.assign({},form.value, {referencia:this.comprobarReferencias(form)});
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
    this.solicitudNgrxSvc.DistpatchCargarRegistroOperacion(obj,this.data.id)
  }



  private comprobarReferencias(form:FormGroup):string{
    let referencia:string = form.get('referencia').value;
    if(form.get('referencia').value === 'otros'){
      referencia = form.get('referenciaBancaria').value;
    }
    return referencia
  }

  cerrarDialog(valor=false){
    this.active = false;
    setTimeout(()=> this.dialogRef.close(valor), 300)
  }

  comprobar(valor){
    return this.sharedSvc.formatoNumericoDecimal(valor);
  }

  private crearFormulario(){
    this.FormOperacion = this.fb.group({
      comision:['', [Validators.required,Validators.pattern('[0-9\.]+'), Validators.maxLength(11)]],
      referencia:['',[Validators.required, Validators.maxLength(15)]],
      referenciaBancaria:['',[Validators.pattern('[0-9]+'), Validators.maxLength(15)]],
      banco:['',[Validators.required]],
      fecha:['',[Validators.required]],
      proyecto_ingreso:[''],
      archivo:['',[Validators.required]]
    })

  }


  mostrarErrores(control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(this.FormOperacion,control,pattron);
  }
  cargarProyectos(){
    this.projectsSvc.loadProjectsAllSinPaginar();
  }

  cambiarDataArchivo(event){
    const listFile = event.target.files;
    const filePath = event.target.value;



    var allowedExtensions = /(.pdf|.PDF)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Solo se permiten archivos PDF');
        this.FormOperacion.controls.archivo.setValue('');
    }else{
      this.FormOperacion.controls.archivo.setValue(listFile[0]);
    }
  }

}
