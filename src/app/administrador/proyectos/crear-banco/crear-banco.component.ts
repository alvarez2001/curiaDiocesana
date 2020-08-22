import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { RegisterProjectState } from '../models/ngrxModelsProjects';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ProjectsService } from '../services/projects.service';
import {
  CrearBancoModel,
  nacionalidadesMask,
  listadoBancos,
} from '../models/project.models';

@Component({
  selector: 'app-crear-banco',
  templateUrl: './crear-banco.component.html',
  providers: [SharedService, ProjectsService],
})
export class CrearBancoComponent implements OnInit {
  registrarBanco: FormGroup;
  bancoState$: Observable<RegisterProjectState>;
  nacionalidad: {
    value: string;
    nacionalidadMask: string;
  }[] = nacionalidadesMask;
  listBancos: { codigo: string; nombre: string; rif: string }[] = listadoBancos;
  private subscription: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private sharedSvc: SharedService,
    private projectSvc: ProjectsService
  ) {
    this.registrarFormulario();
  }

  ngOnInit(): void {
    this.bancoState$ = this.projectSvc.SeleccionarEliminarRegistrarBanco();
    this.subscription.add(
      this.bancoState$.subscribe((res) => {
        if (res.success === 1) {
          this.registrarBanco.reset();
          this.registrarBanco.get('tipo_cuenta').setValue('Nacional');
        }
      })
    );
  }

  ngOnDestroy() {
    this.reiniciarState();
    this.subscription.unsubscribe();
  }

  reiniciarState() {
    this.projectSvc.ReiniciarRegistroEliminarBanco();
  }
  comprobarNumerico(numero: number | string): boolean {
    return this.sharedSvc.formatoNumerico(numero);
  }

  guardarBanco() {
    const banco: CrearBancoModel = CrearBancoModel.crearbancoModelObj(
      this.registrarBanco.value
    );
    this.projectSvc.cargarRegistroBanco(banco);
  }

  private registrarFormulario() {
    this.registrarBanco = this.fb.group({
      nombres: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(90),
        ],
      ],
      apellidos: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(90),
        ],
      ],
      nacionalidad: ['', [Validators.required]],
      identificacion: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(9),
          Validators.pattern('[0-9]+'),
        ],
      ],
      banco: ['', [Validators.required, Validators.maxLength(190)]],
      tipo_cuenta: ['Nacional', [Validators.required]],
      numero_nacional: [
        '',
        [Validators.minLength(20), Validators.maxLength(20)],
      ],
      numero_internacional: ['', [Validators.maxLength(35)]],
      alias: ['', [Validators.maxLength(50)]],
    });
  }

  mostrarErrores(control, pattron = ''): string {
    return this.sharedSvc.mostrarErrores(this.registrarBanco, control, pattron);
  }

  validarCualTipoCuentaElige(TipodeCuentaValidar: number): boolean {
    const tipoCuenta = this.registrarBanco.get('tipo_cuenta');
    const numero_nacional = this.registrarBanco.get('numero_nacional').value;
    const numero_internacional = this.registrarBanco.get('numero_internacional')
      .value;
    if (tipoCuenta.value === 'Nacional' && TipodeCuentaValidar === 1) {
      return tipoCuenta.value === 'Nacional' && numero_nacional !== ''
        ? false
        : true;
    }
    if (tipoCuenta.value === 'Internacional' && TipodeCuentaValidar === 0) {
      return tipoCuenta.value === 'Internacional' && numero_internacional !== ''
        ? false
        : true;
    }
    return true;
  }
}
