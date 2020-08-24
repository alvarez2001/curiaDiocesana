import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, AfterContentInit, AfterViewChecked, Renderer2 } from '@angular/core';
import * as bulmaSteps from "node_modules/bulma-extensions/bulma-steps/dist/js/bulma-steps.js";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { NgrxServicesService } from "../services/ngrx-services.service";
import { ProyectosSolicitantesModule, ConceptosSolicitantesModulo } from '../models/SolicitantesNrgx.Models';
import { Observable, Subscription } from 'rxjs';
import { proyectosUsuarioSolicitanteAddSolicitud, SolicitudAgregar } from '../models/solicitantes.models';
import { SharedService } from 'src/app/services/shared/shared.service';
import { BancosState } from 'src/app/administrador/proyectos/models/ngrxModelsProjects';
import { bancosModel } from 'src/app/administrador/proyectos/models/project.models';
@Component({
  selector: 'app-agregar-solicitud',
  templateUrl: './agregar-solicitud.component.html',
  styleUrls: ['./agregar-solicitud.component.scss']
})
export class AgregarSolicitudComponent implements OnInit, OnDestroy {

  formDatos:FormGroup;
  formSeleccioneProyecto:FormGroup;
  formProductos:FormGroup;
  formElement:FormGroup;
  formBancoId:FormGroup;


  seleccionarProyectos$:Observable<ProyectosSolicitantesModule>;
  seleccionarConcepto$:Observable<ConceptosSolicitantesModulo>;
  seleccionarBancos$:Observable<BancosState>;
  private subscriptions:Subscription[] = []

  constructor(private fb:FormBuilder, private solicitudNgrxSvc:NgrxServicesService, private sharedSvc:SharedService) {

    this.cargarFormularios();
  }

  ngOnInit(): void {
    this.cargarProyectos();
    this.cargarConceptos()
    this.cargarBancos();
    bulmaSteps.attach();
    this.seleccionarBancos$ = this.solicitudNgrxSvc.SeleccionarTodosLosBancos();
    this.seleccionarProyectos$ = this.solicitudNgrxSvc.SeleccionarProyectosSolicitantesSolicitud();
    this.seleccionarConcepto$ = this.solicitudNgrxSvc.SeleccionarConceptosSolicitud();

  }
  ngOnDestroy(){
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }


  cargarProyectos(){
    this.solicitudNgrxSvc.cargarProyectosSolicitantesSolicitud();
  }
  cargarConceptos(){
    this.solicitudNgrxSvc.cargarConceptosSolicitud()
  }
  cargarBancos(){
    this.solicitudNgrxSvc.CargarTodosLosBancos();
  }

  guardarSolicitud():void{
    const banco = parseInt(this.formBancoId.get('banco').value)
    const proyecto = parseInt(this.formSeleccioneProyecto.get('proyecto').value)

    const responsable = this.formDatos.get('responsable').value
    const concepto = this.formDatos.get('concepto').value
    const productos = this.formProductos.get('productos').value;

    const datos:SolicitudAgregar = {
      responsable:responsable,
      concepto:concepto,
      productos:productos
    }

    this.solicitudNgrxSvc.CargarGuardarSolicitud(banco,proyecto,datos)
  }

  cargarFormularios(){
    this.formSeleccioneProyecto = this.fb.group({
      proyecto:[null,[Validators.required]],
    });
    this.formDatos = this.fb.group({
      responsable:['',[Validators.required, Validators.maxLength(100)]],
      concepto:[null,[Validators.required]]
    });
    this.formProductos = this.fb.group({
      productos:this.fb.array([], [Validators.required, Validators.minLength(1)]),
    })
    this.formElement = this.fb.group({
      cantidad:['', [Validators.required]],
      descripcion:['',[Validators.required, Validators.maxLength(190)]],
      precio:['', [Validators.required]]
    });
    this.formBancoId = this.fb.group({
      banco:[null,[Validators.required]]
    })
  }
  public get productosArray(): FormArray {
    return this.formProductos.get('productos') as FormArray;
  }
  public removerProducto(i:number){
    this.productosArray.removeAt(i)
    if(this.productosArray.length <= 0){
      const form = this.formElement
      this.incluirValidaciones(form)
    }
  }

  private agregarInfo():FormGroup{
    return this.fb.group({
      cantidad:this.formElement.get('cantidad').value,
      descripcion:this.formElement.get('descripcion').value,
      precio:this.formElement.get('precio').value
    })
  }
  limpiarFormProductos(form:FormGroup){
    form.get('cantidad').setValue('')
    form.get('descripcion').setValue('')
    form.get('precio').setValue('');
  }

  agregarInformacionProductos():void{

    this.productosArray.push(this.agregarInfo());

    const form = this.formElement;

    this.limpiarFormProductos(form)


    if(this.productosArray.length > 0){
      this.limpiarValidaciones(form);
    }

  }

  limpiarValidaciones(form:FormGroup){
    form.get('cantidad').clearValidators()
    form.get('descripcion').clearValidators()
    form.get('precio').clearValidators();
    form.get('descripcion').setValidators(Validators.maxLength(190))
  }

  incluirValidaciones(form){
    form.get('cantidad').setValidators(Validators.required)
    form.get('precio').setValidators(Validators.required);
    form.get('descripcion').setValidators(Validators.required,Validators.maxLength(190))
  }

  private buscarProyecto(proyecto:proyectosUsuarioSolicitanteAddSolicitud[]):proyectosUsuarioSolicitanteAddSolicitud{
    const numero:number = parseInt(this.formSeleccioneProyecto.get('proyecto').value)
    for (let i = 0; i < proyecto.length; i++) {
      const element = proyecto[i];
      if(element.id === numero){
        return element
      }
    }
  }

  private buscarBanco(banco:bancosModel[]):bancosModel{
    const numero:number = parseInt(this.formBancoId.get('banco').value)
    for (let i = 0; i < banco.length; i++) {
      const element = banco[i];
      if(element.id === numero){
        return element
      }
    }
  }

  buscarBancoVista(bancos:bancosModel[]):bancosModel{
    return this.buscarBanco(bancos)
  }

  buscarProyectoVista(proyecto:proyectosUsuarioSolicitanteAddSolicitud[]):proyectosUsuarioSolicitanteAddSolicitud{
    return this.buscarProyecto(proyecto);
  }

  mostrarErrores(form:FormGroup,control, pattron = ''):string{
    return this.sharedSvc.mostrarErrores(form,control,pattron);
  }

  comprobar(valor:number | string | any){
    return this.sharedSvc.formatoNumericoDecimal(valor);
  }






}
